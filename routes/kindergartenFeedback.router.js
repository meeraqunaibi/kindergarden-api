import express from "express";
import feedbackController from "../controller/feedback.controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const feedback = await feedbackController.getAllFeedbacks();
    res.status(200).send(feedback);
  } catch (error) {
    res.status(500).send("Failed to find items!");
  }
});

router.post("/", async (req, res) => {
  try {
    await feedbackController.createFeedback(req);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;