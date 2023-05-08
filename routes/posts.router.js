import express from "express";
import postController from "../controller/post.controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
      const posts = await postController.getAllPosts();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send("Failed to find items!");
  }
});

router.get("/:id", async (req, res) => {
  try {
    //   const item = await [itemController.getItemById(req.params.id)];
    res.status(200).send("item");
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  try {
    await postController.createPost(req);
    res.status(201).send();
  } catch (error) {
    res.status(500).send("Failed to add item!");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await postController.editPost(req);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
      await postController.deletePost(req);
    res.status(201).send();
  } catch (error) {
    res.status(500).send("Failed to add item!");
  }
});
export default router;
