const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  demo: {
    demoContent: String,
  },
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;
