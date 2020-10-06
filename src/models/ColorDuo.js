const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schemaColorDuo = new Schema({
  
  _id: String,
  
  'main': [Number],
  'sub': [Number]
  
}, { collection: 'ColorDuo_', versionKey: false, strict: false});



module.exports = mongoose.model('ColorDuo', schemaColorDuo);