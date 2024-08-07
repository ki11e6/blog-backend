import express from "express";
import {
  getAllPosts,
  createPost,
  getPostDetails,
  updatePost,
  deletePost,
} from "../../controllers/posts/postController.js";
const postRouter = express.Router();

/*
 * route: /api/v1/posts/all
 * method: post
 * access: public
 * description: all post
 */
postRouter.route("/all").get(getAllPosts);

/*
 * route: /api/v1/posts
 * method: post
 * access: private
 * description: create new post
 */
postRouter.route("/").post(createPost);

/*
 * route: /api/v1/posts/:id
 * method: get
 * access: public
 * description: get post details
 */
postRouter.route("/:id").get(getPostDetails);

/*
 * route: /api/v1/posts/:id
 * method: put
 * access: private
 * description: update post
 */
postRouter.route("/:id").put(updatePost);

/*
 * route: /api/v1/posts/:id
 * method: delete
 * access: private
 * description: delete post
 */
postRouter.route("/:id").delete(deletePost);
export default postRouter;
