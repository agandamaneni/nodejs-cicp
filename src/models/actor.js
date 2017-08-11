var mongoose = require('mongoose');
var mongoosedb = require('./../database/mongodb');

var ActorSchema = new mongoose.Schema({
    name : String,
    age : Number
});

var Actor = mongoosedb.model('Actor', ActorSchema);
module.exports = Actor;