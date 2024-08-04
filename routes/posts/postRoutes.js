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

export default postRouter;
