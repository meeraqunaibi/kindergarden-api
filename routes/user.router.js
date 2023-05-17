import express from "express";
const router = express.Router();
import userController from "../controller/user.controller.js";

router.post("/confirm", async (req, res) => {
  try {
    console.log("hello");
    const user = await userController.signUp(req);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
