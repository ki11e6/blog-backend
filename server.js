import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConnect.js";
import userRouter from "./routes/users/userRoutes.js";
import postRouter from "./routes/posts/postRoutes.js";
dbConnect();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", userRouter);
app.use("/api/v1/categories", userRouter);

app.listen(PORT, () => console.log(`Server is runngin on ${PORT}`));
