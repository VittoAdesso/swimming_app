const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Define user model or shema
let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true //I want an unique e mail is true
    },
    password: {
        type: String
    },
}, {
    collection: 'users'
})

//Le indicamos a través del campo unique en el Schema que nos lo valide gracias al plugin 
//instalado y su mensaje al matchearlo si existiera
userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema); //export schema