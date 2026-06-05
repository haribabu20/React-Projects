const bcrypt = require("bcryptjs");
const User = require("../models/User");

// This function handles registeration request
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // shldn't hash the password before checking if the user alread exist.

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email, 
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};

/*

Example payload for user with status code:

1.
{
    "message": "User registered successfully",
    "user": {
        "_id": "6854abc123",
        "name": "Hari",
        "email": "hari@gmail.com",
        "password": "123456"
    }
}

2. 201 created
*/