require('dotenv').config(); // fetch details from .env and loads them into "process.env"

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express();
app.use(express.json()); // important
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

/*

when you add --> " app.use(express.json()); " , express says,

  If a request contains JSON, convert it into a JavaScript object and place it inside req.body."

 */