const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://localhost:27017/todosdb`, {
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