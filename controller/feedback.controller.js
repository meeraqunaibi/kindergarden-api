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
const getFeedback = async (req) => {
  const studentId = req.params.id;
  const feedbackId = req.params.id;
  const feedDoc = await Feedback.findById(feedbackId, studentId);
  if (feedDoc) {
    const feedback = {
      description: feedDoc.description,
      createDate: feedDoc.createDate || "",
      updateDate: feedDoc.updateDate || "",
    }
    return feedback;
  }
  return null;
}
// Create a new feedback
const createFeedback = async (req) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  console.log(`Added feedback ${feedback.description}`);
};

const getFeedbackForStudent = async (studentId) => {
  console.log(studentId);
  return await Feedback.find({ student: studentId }).populate('staff', 'username');
};

export default {
  getAllFeedbacks,
  createFeedback,
  getFeedback,
  getFeedbackForStudent
};
