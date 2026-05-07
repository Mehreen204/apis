const express = require("express");

const router = express.Router();

const {
  createPost,
  getPosts,
  getPostById,
  getPostsByTag,
  updatePost,
  deletePost
} = require("../controllers/postController");

const {
  addComment,
  getComments
} = require("../controllers/commentController");

router.post("/", createPost);

router.get("/", getPosts);

router.get("/tag/:tag", getPostsByTag);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.post("/:postId/comments", addComment);

router.get("/:postId/comments", getComments);

module.exports = router;