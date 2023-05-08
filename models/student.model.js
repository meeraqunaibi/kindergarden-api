import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  levelOfEducation: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  copyOfIdCard: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  hadAccident: Boolean,
  sleepDuringTheDay: Boolean,
  likeWatchingTV: Boolean,
  withWhomChildLive: String,
  description: String,
  afterSchoolStudent: Boolean,
  transportation: new mongoose.Schema({
    address: String,
    time_period: String,
    enum: ["morning", "evening", "both"],
  }),
  strength: {
    type: [String],
    default: [],
  },
  weakness: {
    type: [String],
    default: [],
  },
  previous_kindergarten: new mongoose.Schema({
    name: String,
    reasonForLeaving: String,
  }),
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "staff",
  },
  parent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parent",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parent",
    },
  ],
  feedback: String,
  disease: new mongoose.Schema({
    name: String,
    treatment: Boolean,
    treatmentName: String,
    moreDescription: String,
  }),
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
