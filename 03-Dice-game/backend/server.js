require('dotenv').config(); // fetch details from .env and loads into process.env

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Backend is running");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})