import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide username"],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      max: 40,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      min: 6,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
