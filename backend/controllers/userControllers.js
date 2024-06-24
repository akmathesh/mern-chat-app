import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password || !pic) {
    res.status(400);
    throw new Error(`Please enter all the fields`);
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error(`User already exists`);
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(res, user._id),
    });
  } else {
    res.status(400);
    throw new Error(`Failed to create new user`);
  }
});

const authUser = expressAsyncHandler(async (req, res) => {});

export { registerUser, authUser };
