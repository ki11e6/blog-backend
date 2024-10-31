import express from "express";
import { upload } from "../../config/cloudinary.js";
import checkOjectId from "../../middlewares/checkOjectId.js";
import { isLogin } from "../../middlewares/isLogin.js";
import {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
  getAllUsers,
  deleteUser,
  updateUser,
  profileAvatarUpload,
} from "../../controllers/users/userController.js";
const userRouter = express.Router();

userRouter.route("/register").post(userRegister);

userRouter.route("/login").post(userLogin);

userRouter.route("/profile").get(isLogin, userProfile);

userRouter.route("/logout").get(userLogout);

userRouter.route("/").get(getAllUsers);

userRouter
  .route("/:id/avatar")
  .post(isLogin, checkOjectId, upload.single("avatar"), profileAvatarUpload);

userRouter
  .route("/:id")
  .put(updateUser)
  .delete(isLogin, checkOjectId, deleteUser);

export default userRouter;
