import express from "express";
const commentRouter = express.Router();

/*
 * route: /api/v1/comments
 * method: post
 * access: private
 * description: create new comment
 */
commentRouter.route("/").post((req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/comments/:id
 * method: get
 * access: public
 * description: get single comment
 */
commentRouter.route("/:id").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment found",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/comments/:id
 * method: put
 * access: private
 * description: update comment
 */
commentRouter.route("/:id").put((req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/comments/:id
 * method: delete
 * access: private
 * description: delete comment
 */
commentRouter.route("/:id").delete((req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});

export default commentRouter;
