const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
const uniqueValidator = require('mongoose-unique-validator');

const ButterflySchema = new Schema({
    title: { type: String, required: true}, 
    img: { type: String, required: true }, 
    description: { type: String, required: true },
    link: { type: String }
}, 
{   collection: 'butterfly' }
); 


// no necesito lo de uniquevalidator (opcional )
// ButterflySchema.plugin(uniqueValidator, { message: 'Name already in use.' });
module.exports = mongoose.model('Butterfly', ButterflySchema);
