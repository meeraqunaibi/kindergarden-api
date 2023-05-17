import mongoose from "mongoose";

const ParentSchema = new mongoose.Schema({
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherLevelOfEdu: {
    type: String,
    required: true,
  },
  fatherLevelOfEdu: {
    type: String,
    required: true,
  },
  motherMobileNum: {
    type: String,
    required: true,
  },
  fathermMobileNum: {
    type: String,
    required: true,
  },
  telephoneNum: {
    type: String,
    required: true,
  },
  facebookProfileLink: {
    type: String
  },
});

const Parent = mongoose.model("Parent", ParentSchema);

export default Parent;
