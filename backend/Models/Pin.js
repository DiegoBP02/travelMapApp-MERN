import mongoose from "mongoose";

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide username"],
    },
    title: {
      type: String,
      required: [true, "Please provide title"],
      min: 3,
    },
    desc: {
      type: String,
      required: [true, "Please provide description"],
      min: 6,
    },
    rating: {
      type: Number,
      required: [true, "Please provide rating"],
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      required: [true, "Please provide latitude "],
    },
    long: {
      type: Number,
      required: [true, "Please provide longitude "],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pin", PinSchema);
