import express from "express";
import {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} from "../../controllers/comments/commentController.js";
const commentRouter = express.Router();

/*
 * route: /api/v1/comments
 * method: post
 * access: private
 * description: create new comment
 */
commentRouter.route("/").post(createComment);

/*
 * route: /api/v1/comments/:id
 * method: get
 * access: public
 * description: get single comment
 */
commentRouter.route("/:id").get(getComment);

/*
 * route: /api/v1/comments/:id
 * method: put
 * access: private
 * description: update comment
 */
commentRouter.route("/:id").put(updateComment);

/*
 * route: /api/v1/comments/:id
 * method: delete
 * access: private
 * description: delete comment
 */
commentRouter.route("/:id").delete(deleteComment);

export default commentRouter;
