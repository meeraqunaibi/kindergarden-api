import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
  levelOfEducation: {
    type: String,
  },
  addedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
