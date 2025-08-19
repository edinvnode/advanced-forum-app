const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Post schema
const PostSchema = new Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String, required: true },
});

// Define Topic schema with posts array
const TopicSchema = new Schema({
  title: { type: String, required: true },
  posts: [PostSchema],
});

module.exports = mongoose.model('Topic', TopicSchema);
