import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConnect.js";

import userRouter from "./routes/users/userRoutes.js";
import postRouter from "./routes/posts/postRoutes.js";
import commentRouter from "./routes/comments/commentRoutes.js";
import categoryRouter from "./routes/categories/categoryRoutes.js";
import { errorHandler, notFoound } from "./middlewares/globalErrorHandler.js";

dbConnect();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/categories", categoryRouter);

app.use("*", notFoound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is runngin on ${PORT}`));
