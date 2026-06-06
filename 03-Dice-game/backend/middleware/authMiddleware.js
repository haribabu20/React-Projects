const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
  try{
    const authHeader = req.headers.authorization; // authHeader output -> bearer <jwt-token>

    if(!authHeader){
      res.status(401).json({
        message: 'No token provided',
      });
    }

    console.log(authHeader);

    const token = authHeader.split(' ')[1];

    // important line to perform in this function !
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verifying token if it is valid using secret key and token. If yes, proceed next step !

    req.user = decoded;

    next();
  }catch(error){
    res.status(401).json({
      message: 'Invalid Token',
    });
  }
}

module.exports = protect;

/*

authHeader will be --> bearer <jwt token>. 
From this we need to separate the jwt token. So we use split method.

"Bearer eyJhbGc..." 

becomes,

[
  "Bearer",
  "eyJhbGc..."
]

Then on using const token = authHeader.split(" ")[1];, we get 

eyJhbGc...

*/