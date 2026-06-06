const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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


// This function handles Login request
const loginUser = async (req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email}); // user variable now has complete user record from DB.

    if(!user){
      return res.status(400).json({
        message: 'User not found, Please register.',
      });
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if(!isPasswordMatching){
      return res.status(400).json({
        message: 'Invalid Credentials',
      });
    }

    // token generation
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    )

    // passing token as response
    return res.status(200).json({
      message: 'Login Successful',
      token,
    })

  }catch(error){
    res.status(500).json({
      message: error.message,
    });
  }
}


module.exports = {
  registerUser,
  loginUser
};


/*

  const user = await User.findOne({email});

  here user value is full object payload value of the user whose email is given above.

*/
