const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invitation",
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  feedbackText: {
    type: String,
    required: true,
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
