const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: { type: String, required: false },
  duration: { type: Number, required: true },
  image: { type: String, required: false },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
