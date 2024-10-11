import express from "express";
import {
  getAllPosts,
  createPost,
  getPostDetails,
  updatePost,
  deletePost,
} from "../../controllers/posts/postController.js";
const postRouter = express.Router();

postRouter.route("/all").get(getAllPosts);

postRouter.route("/").post(createPost);

postRouter.route("/:id").get(getPostDetails);

postRouter.route("/:id").put(updatePost);

postRouter.route("/:id").delete(deletePost);
export default postRouter;
