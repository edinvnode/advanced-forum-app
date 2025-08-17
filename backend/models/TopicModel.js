const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define a Post schema (embedded in Topic)
const PostSchema = new Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String }, // later you can link this to a User model
});

// Define a Topic schema with multiple posts
const TopicSchema = new Schema({
  title: { type: String, required: true },
  posts: [PostSchema], // array of posts
});

module.exports = mongoose.model('Topic', TopicSchema);
