const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile
} = require('../controllers/authController');

const protect  = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/register", registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile); // profile is middleware [security] and getProfile is controller

module.exports = router;