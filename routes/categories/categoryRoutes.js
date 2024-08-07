import express from "express";

const categoryRouter = express.Router();

/*
 * route: /api/v1/categories/all
 * method: get
 * access: public
 * description: all categories
 */
categoryRouter.route("/all").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "all categories",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/categories
 * method: post
 * access: private
 * description: create new category
 */
categoryRouter.route("/").post((req, res) => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/categories/:id
 * method: get
 * access: public
 * description: get category
 */
categoryRouter.route("/:id").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "category found",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/categories/:id
 * method: put
 * access: private
 * description: update category
 */
categoryRouter.route("/:id").put((req, res) => {
  try {
    res.json({
      status: "success",
      data: "category updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});

/*
 * route: /api/v1/categories/:id
 * method: delete
 * access: private
 * description: delete category
 */
categoryRouter.route("/:id").delete((req, res) => {
  try {
    res.json({
      status: "success",
      data: "category deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});

export default categoryRouter;
