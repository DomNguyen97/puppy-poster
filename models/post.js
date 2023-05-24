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
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Post', postsSchema)