/*
 * route: /api/v1/posts/all
 * method: post
 * access: public
 * description: all post
 */
const getAllPosts = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/posts
 * method: post
 * access: private
 * description: create new post
 */
const createPost = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "post created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/posts/:id
 * method: get
 * access: public
 * description: get post details
 */
const getPostDetails = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "post details",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/posts/:id
 * method: put
 * access: private
 * description: update post
 */
const updatePost = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "post updated",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/posts/:id
 * method: delete
 * access: private
 * description: delete post
 */
const deletePost = (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: "post deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

export { getAllPosts, createPost, getPostDetails, updatePost, deletePost };
