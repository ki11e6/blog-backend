import express from "express";
import checkOjectId from "../../middlewares/checkOjectId.js";
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

userRouter.route("/register").post(userRegister);

userRouter.route("/login").post(userLogin);

userRouter.route("/profile/:id").get(checkOjectId, userProfile);

userRouter.route("/logout").get(userLogout);

userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").delete(deleteUser);

userRouter.route("/:id").put(updateUser);
export default userRouter;
