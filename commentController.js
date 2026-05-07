const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post");


// ADD COMMENT
exports.addComment = async (req, res) => {
  try {

    const { text, user } = req.body;

    const postExists = await Post.findById(req.params.postId);

    if (!postExists) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    const userExists = await User.findById(user);

    if (!userExists) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const comment = await Comment.create({
      text,
      post: req.params.postId,
      user
    });

    res.status(201).json(comment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET COMMENTS
exports.getComments = async (req, res) => {
  try {

    const comments = await Comment.find({
      post: req.params.postId
    }).populate("user", "username");

    res.status(200).json(comments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// DELETE COMMENT
exports.deleteComment = async (req, res) => {
  try {

    await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Comment deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};