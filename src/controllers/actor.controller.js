var Actor = require('./../models/actor');

get = function(req, res){
    Actor.find(function(error, actors){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            res.send(actors);
        }
    })
}

getById = function(req, res){
    Actor.findById(req.params.id, function(error, actor){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            res.send(actor);
        }
    })
}

add = function(req, res){
    var actor = new Actor(req.body);
    actor.save(function(error, actor){
        if(error){
            res.send('Error : ' + error);
        }
        else{
            res.send(actor);
        }
    })
}

module.exports = {
    get : get,
    getById : getById,
    add : add
}