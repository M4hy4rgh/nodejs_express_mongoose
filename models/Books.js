const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: String,
    required: true,
    lowercase: true,
  },
  price: Number,
  published_date: Date,
});

module.exports = mongoose.model("Book", BookSchema);
