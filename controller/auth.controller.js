
import User from "../models/user.model.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const signIn = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please enter email and password",
      });
    }

    const user = await User.findOne({ username: req.body.username, password: req.body.password });

    if (user) {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.kindergarden_jwtprivatekey,
        { expiresIn: "30d" }
      );
      const { username, email, role, profile } = user;
      return res.status(StatusCodes.OK).json({
        token,
        user: { username, email, role, profile, id: user._id },
      });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "User does not exist..!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json(error.message);
  }
};


export default { signIn };
