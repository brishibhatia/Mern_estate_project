import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //   console.log(req.body); here we are saving the info in the database
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully ");
  } catch (error) {
    // res.status(500).json(error.message);
    next(error);
    // next(errorHandler(550, "Error from the function")); using errohandler function
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials "));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    // we are doing the above line so that we get info without the password
    res
      .cookie("access_token", token, { httponly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
