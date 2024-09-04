import express from "express";
import {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../../controllers/categories/categoryController.js";
const categoryRouter = express.Router();

categoryRouter.route("/all").get(getAllCategories);

categoryRouter.route("/").post(createCategory);

categoryRouter.route("/:id").get(getCategory);

categoryRouter.route("/:id").put(updateCategory);

categoryRouter.route("/:id").delete(deleteCategory);

export default categoryRouter;
