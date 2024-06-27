import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  // res.cookie("jwtToken", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development",
  //   sameSite: "strict",
  //   maxAge: 30 * 24 * 60 * 60 * 1000,
  // });
};

export default generateToken;
