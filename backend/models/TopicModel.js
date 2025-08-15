const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

// Define a Topic schema
const TopicSchema = new mongoose.Schema({
  title: String,
  message: String,
});

module.export = mongoose.model('Topic', TopicSchema);
