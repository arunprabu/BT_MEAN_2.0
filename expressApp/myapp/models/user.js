var mongoose = require('mongoose');
var Schema = mongoose.Schema; // schema is the class; it is the blueprint of db.
var mongooseUniqueValidator = require('mongoose-unique-validator'); //plugin to validate email uniqueness

var schema = new Schema({
    firstName: { type: String, required: true}, 
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true, unique: true},
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message'}]
})

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);