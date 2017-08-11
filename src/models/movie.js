var mongoose = require('mongoose');
var mongoosedb = require('./../database/mongodb');
var Actor = require('./actor');

var movieSchema = mongoose.Schema({
    name : String,
    actor : [{ id: mongoose.Schema.Types.ObjectId, name : String, role : String,  _id: false}],
    //heroin : String
    // director : string,
    // poster : string,
    // trailer : string,
    // releasedate : Date,
    // isReleased : boolean
});


var Movie = mongoosedb.model('Movie', movieSchema);
module.exports = Movie;
