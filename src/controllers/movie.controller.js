var Movie = require('./../models/movie');
var Actor = require('./../models/actor');

get = function (req, res) {
    Movie.find(function(error, movies){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            res.send(movies);
        }
    })
}

getById = function(req, res){
    Movie.findById(req.params.id, function(error, movie){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            res.send(movie);
        }
    });
}

add = (req, res) => {
    var actor = new Actor(req.body.hero);
    actor.save(function(error, hero){
        if(error){
            console.log('error accured while saving the hero');
        }
    })
    var movie = new Movie({
        name : req.body.name,
        actor : [{ id : actor._id, name : actor.name}]
    });
    movie.save(function(error, movie) {
        if(error){
            console.log('error accured while saving the movie');
            res.send('Error : ' + error);
        }
        else{
            console.log('successfully saved the movie');
            res.send(movie);
        }
    })
}

del = function(req, res){
    console.log(req.params.id);
    Movie.findById(req.params.id, function(error, movie){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            movie.remove(function(error, movie){
                if(error){
                    res.send('Error : ' + error);
                }
                else{
                    res.send(movie);
                }
            });
        }
    });
}

module.exports = {
    get : get,
    add : add,
    getById : getById,
    del : del
};