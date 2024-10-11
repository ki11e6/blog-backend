/*
 * route: /api/v1/categories/all
 * method: get
 * access: public
 * description: all categories
 */
const getAllCategories = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "all categories",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/categories
 * method: post
 * access: private
 * description: create new category
 */
const createCategory = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/categories/:id
 * method: get
 * access: public
 * description: get category
 */
const getCategory = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "category found",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/categories/:id
 * method: put
 * access: private
 * description: update category
 */
const updateCategory = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "category updated",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/categories/:id
 * method: delete
 * access: private
 * description: delete category
 */
const deleteCategory = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "category deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

export {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
