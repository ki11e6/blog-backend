import express from "express";

const postRouter = express.Router();

/*
 * route: /api/v1/posts/all
 * method: post
 * access: public
 * description: all post
 */
postRouter.route("/all").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/posts
 * method: post
 * access: private
 * description: create new post
 */
postRouter.route("/").post((req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/posts/:id
 * method: get
 * access: public
 * description: get post details
 */
postRouter.route("/:id").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "post details",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/posts/:id
 * method: put
 * access: private
 * description: update post
 */
postRouter.route("/:id").put((req, res) => {
  try {
    res.json({
      status: "success",
      data: "post updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/posts/:id
 * method: delete
 * access: private
 * description: delete post
 */
postRouter.route("/:id").delete((req, res) => {
  try {
    res.json({
      status: "success",
      data: "post deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});
export default postRouter;
