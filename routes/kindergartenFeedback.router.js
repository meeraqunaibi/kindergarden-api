import express from "express";
import feedbackController from "../controller/feedback.controller.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await feedbackController.createFeedback(req);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;