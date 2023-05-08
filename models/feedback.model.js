import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  createDate: Date,
  updateDate: Date,
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
