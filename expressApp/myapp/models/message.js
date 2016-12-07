var mongoose = require('mongoose');
var Schema = mongoose.Schema; // schema is the class; it is the blueprint of db.

//This is the blueprint of the db. Create an obj and set types and few more config stuff.
var schema = new Schema({
                notes: { type: String, required: true },
                user: {type: Schema.Types.ObjectId, ref: 'User'}
            });

module.exports = mongoose.model('Notes', schema); 
