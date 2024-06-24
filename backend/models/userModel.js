import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

export default User;
