import express from "express";
import {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../../controllers/categories/categoryController.js";
const categoryRouter = express.Router();

/*
 * route: /api/v1/categories/all
 * method: get
 * access: public
 * description: all categories
 */
categoryRouter.route("/all").get(getAllCategories);

/*
 * route: /api/v1/categories
 * method: post
 * access: private
 * description: create new category
 */
categoryRouter.route("/").post(createCategory);

/*
 * route: /api/v1/categories/:id
 * method: get
 * access: public
 * description: get category
 */
categoryRouter.route("/:id").get(getCategory);

/*
 * route: /api/v1/categories/:id
 * method: put
 * access: private
 * description: update category
 */
categoryRouter.route("/:id").put(updateCategory);

/*
 * route: /api/v1/categories/:id
 * method: delete
 * access: private
 * description: delete category
 */
categoryRouter.route("/:id").delete(deleteCategory);

export default categoryRouter;
