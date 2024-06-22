const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const textSchema = new Schema({
   text:{type:String, require}
})


const Text = mongoose.model('Text', textSchema);


module.exports = Text