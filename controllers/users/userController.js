import User from "../../models/User/User.js";
import { generateToken } from "../../utils/generateToken.js";
import { getTokenFromHeader } from "../../utils/getTokenFromHeader.js";
import { verifyToken } from "../../utils/verifyToken.js";

/*
 * route: /api/v1/users/register
 * method: post
 * access: public
 * description: register new user
 */
const userRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    //check if user exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        message: "user already exist",
      });
    }
    //Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json({
      status: "new uer created successfully",
      data: newUser,
    });
  } catch (error) {
    // Handle Mongoose validation error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message,
      });
    }
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/login
 * method: POST
 * access: public
 * description: login user
 */
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if user exist
    const userFound = await User.findOne({ email });
    if (userFound && (await userFound.comparePassword(password))) {
      res.json({
        status: "login successfully",
        data: {
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          email: userFound.email,
          isAdmin: userFound.isAdmin,
          token: await generateToken({ userId: userFound._id }),
        },
      });
    } else {
      res.status(401);
      throw new Error("Invalid login credentials");
    }
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/profile/:id
 * method: GET
 * access: private
 * description: get user profile
 */
const userProfile = async (req, res) => {
  try {
    const userFound = await User.findOne({ _id: req.userId });
    if (userFound) {
      res.json({
        status: "success",
        data: userFound,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/logout
 * method: GET
 * access: private
 * description: logout user
 */
const userLogout = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user logged out",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users
 * method: GET
 * access: private/admin
 * description: get all users
 */
const getAllUsers = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "all users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/:id
 * method: DELETE
 * access: private/admin
 * description: delete user
 */
const deleteUser = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/:id
 * method: PUT
 * access: private/admin
 * description: update user
 */
const updateUser = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updated",
    });
  } catch (error) {
    res.json(error.message);
  }
};

export {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
  getAllUsers,
  deleteUser,
  updateUser,
};
