/*
 * route: /api/v1/comments
 * method: post
 * access: private
 * description: create new comment
 */
const createComment = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/comments/:id
 * method: get
 * access: public
 * description: get single comment
 */
const getComment = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment found",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/comments/:id
 * method: put
 * access: private
 * description: update comment
 */
const updateComment = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment updated",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/comments/:id
 * method: delete
 * access: private
 * description: delete comment
 */
const deleteComment = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

export { createComment, getComment, updateComment, deleteComment };
