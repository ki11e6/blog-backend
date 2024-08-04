import express from "express";

const userRouter = express.Router();

/*
 * route: /api/v1/users/register
 * method: post
 * access: public
 * description: register new user
 */
userRouter.route("/register").post((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/login
 * method: POST
 * access: public
 * description: login user
 */
userRouter.route("/login").post((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user logged in",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/profile
 * method: GET
 * access: private
 * description: get user profile
 */
userRouter.route("/profile/:id").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user profile",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/logout
 * method: GET
 * access: private
 * description: logout user
 */
userRouter.route("/logout").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user logged out",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/
 * method: GET
 * access: private/admin
 * description: get all users
 */
userRouter.route("/").get((req, res) => {
  try {
    res.json({
      status: "success",
      data: "all users",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/:id
 * method: DELETE
 * access: private/admin
 * description: delete user
 */
userRouter.route("/:id").delete((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
});
/*
 * route: /api/v1/users/:id
 * method: PUT
 * access: private/admin
 * description: update user
 */
userRouter.route("/:id").put((req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updated",
    });
  } catch (error) {
    res.json(error.message);
  }
});
export default userRouter;
