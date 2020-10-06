const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schemaColorSolo = new Schema({
  
  _id: String,
  
  'main': [Number]
  
}, { collection: 'ColorSolo_', versionKey: false, strict: false});



module.exports = mongoose.model('ColorSolo', schemaColorSolo);