import express from "express";
import {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} from "../../controllers/comments/commentController.js";
const commentRouter = express.Router();

commentRouter.route("/").post(createComment);

commentRouter.route("/:id").get(getComment);

commentRouter.route("/:id").put(updateComment);

commentRouter.route("/:id").delete(deleteComment);

export default commentRouter;
