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
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  type:{
    String
  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
