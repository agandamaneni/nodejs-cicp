var express = require('express');
var movieController = require('./../controllers/movie.controller');

var movieRouter = express.Router();

movieRouter.route('')
    .get(movieController.get)
    .post(movieController.add);
    
movieRouter.route('/:id')
    .get(movieController.getById)
    .delete(movieController.del);

module.exports = movieRouter;