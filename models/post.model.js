import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  levelOfEducation: {
    type: String,
    required: true,
  },
  addedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
