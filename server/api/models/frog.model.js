const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
// const uniqueValidator = require('mongoose-unique-validator');

const FrogSchema = new Schema({
    title: { type: String, required: true}, 
    img: { type: String, required: true }, 
    description: { type: String, required: true },
    link: { type: String }
}, 
{   collection: 'frog' }
); 


// no necesito lo de uniquevalidator (opcional )
// FrogSchema.plugin(uniqueValidator, { message: 'Name already in use.' });
module.exports = mongoose.model('Frog', FrogSchema);
