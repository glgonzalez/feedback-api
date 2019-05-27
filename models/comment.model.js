const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentModel = new Schema(
  {
    message: { type: String, default: null },
    user: { type: String, default: null },
    rating: { type: Number, default: null },
    session: { type: String },
    date: { type: Date, default: Date.now() }
  }, { collection: 'comment' }
);

module.exports = mongoose.model('Comment', commentModel);
