const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.registeruser);

router.post('/register', (req, res) => {
    req.body.isAdmin = true; // Set isAdmin to true for admin registration
    authController.registeruser(req, res);
  });

// Login user
router.post('/login', authController.loginuser);

module.exports = router;




// const UserController = require("../controller/UserController");
// const {
//   createUser,
//   VerifyOtp,
//   logoutUser,
//   getUserProfile,
//   updateProfile,
//   deleteUser,
//   verifyAccountDeletion,
// } = require("../controller/UserController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const router = express.Router();

// router.route("/registration").post(createUser);