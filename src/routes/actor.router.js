var express = require('express');
var ActorController = require('./../controllers/actor.controller');

var ActorRouter = express.Router();

ActorRouter.route('').get(ActorController.get);
ActorRouter.route('').post(ActorController.add);
ActorRouter.route('/:id').get(ActorController.getById);

module.exports = ActorRouter;