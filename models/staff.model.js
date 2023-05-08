import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  yearOfExperience: {
    type: String,
    required: true,
  },
  copyOfId: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: [String],
    default: []
  }
});

const Staff = mongoose.model("Staff", StaffSchema);

export default Staff;
