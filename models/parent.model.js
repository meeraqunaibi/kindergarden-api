import mongoose from "mongoose";

const ParentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  levelOfEdu: {
    type: String,
    required: true,
  },
  mobileNum: {
    type: String,
    required: true,
  },
  telephoneNum: {
    type: String,
    required: true,
  },
  facebookProfileLink: {
    type: String,
    required: true,
  },
});

const Parent = mongoose.model("Parent", ParentSchema);

export default Parent;
