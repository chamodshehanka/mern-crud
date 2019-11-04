const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema(
  {
    person_name: {
      type: String
    },
    business_name: {
      type: String
    },
    nic_no: {
      type: String
    }
  },
  {
    collection: 'business'
  }
);

module.exports = mongoose.model('Business', Business);
