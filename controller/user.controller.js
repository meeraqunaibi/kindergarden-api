import mongoose from "mongoose";
import User from "../models/user.model.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import bcrypt from "bcrypt";

// register new Student
const signUp = async (req, res) => {
  const { username, role, profile } = req.body;
  if (!username || !role || !profile || !req.body.password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please Provide Required Information",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  const userData = {
    username,
    password,
    role,
    profile,
  };

  const user = await User.findOne({ username });
  if (user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "User already registered",
    });
  }
    User.create(userData).then((data, err) => {
      if (err)
        res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
      else res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    });
};

export default { signUp };
