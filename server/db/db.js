require("dotenv").config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    throw new Error(error);
  });

module.exports = { mongoose };