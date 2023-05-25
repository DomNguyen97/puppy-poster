const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postsSchema)