const mongoose = require('mongoose');

module.exports = mongoose.model('sensor', new mongoose.Schema({
  name: String,
  floor: String,
  room: String,
  status: Boolean,
  gas: Array,
}, { collection : 'sens' }));
