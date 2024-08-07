/*
 * route: /api/v1/users/register
 * method: post
 * access: public
 * description: register new user
 */
const userRegister = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user registered",
    });
  } catch (error) {
    res.json(error.message);
  }
};

/*
 * route: /api/v1/users/login
 * method: POST
 * access: public
 * description: login user
 */
const userLogin = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user logged in",
    });
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
const userProfile = (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user profile",
    });
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
