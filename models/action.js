const mongoose = require('mongoose');
const User = require('./user');
const actionSchema = new mongoose.Schema({
  actionName: {
    type: String,
    required: true,
  },
  actionType: {
    type: String,
    required: true
  },
  actionDate: {
    type: Date,
    required: true,
  },
  devices: {
    type: [String]
  },
  enabled: {
    type: Boolean,
    default: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',  
    required: true 
  }
});

const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
