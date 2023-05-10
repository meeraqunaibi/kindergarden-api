import mongoose from "mongoose";
import Post from "../models/post.model.js";

// Get all Posts
const getAllPosts = async () => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    return posts;
  } catch (error) {
    console.error(err);
  }
};

// Create a new Post
const createPost = async (req) => {
  const post = new Post(req.body); 
  // console.log(`Added Post ${post.title}`);
  return await post.save();
};

const editPost = async (req) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(post);
  if (!post)
    return res
      .status(404)
      .send("The post with the given ID was not found.");
};

const deletePost = async (req) =>{
  const post = await Post.findByIdAndRemove(req.params.id);

  if (!post) return res.status(404).send('The post with the given ID was not found.');
}
export default { getAllPosts, createPost, editPost, deletePost };
