const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");


// CREATE POST
exports.createPost = async (req, res) => {
  try {

    const user = await User.findById(req.body.author);

    if (!user) {
      return res.status(404).json({
        message: "Author not found"
      });
    }

    const post = await Post.create(req.body);

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET ALL POSTS
exports.getPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author", "username email");

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET SINGLE POST
exports.getPostById = async (req, res) => {
  try {

    const post = await Post.findById(req.params.id)
      .populate("author", "username email");

    const comments = await Comment.find({
      post: req.params.id
    }).populate("user", "username");

    res.status(200).json({
      post,
      comments
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET POSTS BY TAG
exports.getPostsByTag = async (req, res) => {
  try {

    const posts = await Post.find({
      tags: req.params.tag
    });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// UPDATE POST
exports.updatePost = async (req, res) => {
  try {

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// DELETE POST + COMMENTS
exports.deletePost = async (req, res) => {
  try {

    await Comment.deleteMany({
      post: req.params.id
    });

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post and comments deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};