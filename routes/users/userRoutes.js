import express from "express";
import {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../../controllers/users/userController.js";
const userRouter = express.Router();

/*
 * route: /api/v1/users/register
 * method: post
 * access: public
 * description: register new user
 */
userRouter.route("/register").post(userRegister);

/*
 * route: /api/v1/users/login
 * method: POST
 * access: public
 * description: login user
 */
userRouter.route("/login").post(userLogin);

/*
 * route: /api/v1/users/profile/:id
 * method: GET
 * access: private
 * description: get user profile
 */
userRouter.route("/profile/:id").get(userProfile);

/*
 * route: /api/v1/users/logout
 * method: GET
 * access: private
 * description: logout user
 */
userRouter.route("/logout").get(userLogout);

/*
 * route: /api/v1/users/
 * method: GET
 * access: private/admin
 * description: get all users
 */
userRouter.route("/").get(getAllUsers);

/*
 * route: /api/v1/users/:id
 * method: DELETE
 * access: private/admin
 * description: delete user
 */
userRouter.route("/:id").delete(deleteUser);

/*
 * route: /api/v1/users/:id
 * method: PUT
 * access: private/admin
 * description: update user
 */
userRouter.route("/:id").put(updateUser);
export default userRouter;
