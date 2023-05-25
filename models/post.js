const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
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
    userName: {
        type: String,
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Post', postsSchema)