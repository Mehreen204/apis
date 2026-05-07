const User = require("../models/User");
const Post = require("../models/Post");

const bcrypt = require("bcryptjs");


// REGISTER USER
exports.registerUser = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET ALL USERS
exports.getUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET SINGLE USER WITH POSTS
exports.getUserById = async (req, res) => {
  try {

    const user = await User.findById(req.params.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const posts = await Post.find({
      author: req.params.id
    });

    res.status(200).json({
      user,
      posts
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};