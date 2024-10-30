import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  //   console.log(req.body); here we are saving the info in the database
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully ");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
