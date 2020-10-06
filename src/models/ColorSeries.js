const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schemaColorSeries = new Schema({
  
  _id: String,
  
  '00': [Number],
  '10': [Number],
  '20': [Number],
  '30': [Number],
  '40': [Number],
  '50': [Number],
  '60': [Number],
  '70': [Number],
  '80': [Number],
  '90': [Number],
  '100': [Number]
  
}, { collection: 'ColorSeries_', versionKey: false, strict: false});



module.exports = mongoose.model('ColorSeries', schemaColorSeries);