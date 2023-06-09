const mongoose = require('mongoose');

module.exports = mongoose.model('AirConditioning', new mongoose.Schema({
  name: String,
  floor: String,
  room: String,
  status: Boolean,
  gas: Array
}, { collection : 'acond' }));