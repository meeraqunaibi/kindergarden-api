import User from "../models/user.model.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import jwt from "jsonwebtoken";

const signIn = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please enter email and password",
      });
    }

    const user = await User.findOne({ username: req.body.username });

    if (user) {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
      process.env.kindergarden_jwtprivatekey,
        { expiresIn: "30d" }
      );
      const { _id, email, password, role, profile } = user;
      res.status(StatusCodes.OK).json({
        token,
        user: { _id, email, password, role, profile },
      });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "User does not exist..!",
      });
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error.message);
  }
};

export default { signIn };
