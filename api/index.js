import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is listening at port 3000!");
});
//  created a test api I was commiting a mistake by not checking at the localhost 3000 server
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// middle ware created below
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
