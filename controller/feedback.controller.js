import mongoose from "mongoose";
import Feedback from "../models/feedback.model.js";

// Get all feedbacks
const getAllFeedbacks = async () => {
  try {
    const feedbacks = await Feedback.find();
    return feedbacks;
  } catch (error) {
    console.error(err);
  }
};

// Create a new feedback
const createFeedback = async (req) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  console.log(`Added feedback ${feedback.description}`);
};

export default { getAllFeedbacks,
     createFeedback 
    };
