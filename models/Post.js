const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  post: String,
  date: String,
  solved: Boolean,
  reply: Array
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
