import express from "express";
const router = express.Router();
import User from "../Models/User.js";
import bcrypt from "bcrypt";

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json({
      username: user.username,
      _id: user._id,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Invalid Credentials");
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json("Invalid Credentials");
    }
    res.status(200).json({
      username: user.username,
      _id: user._id,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
