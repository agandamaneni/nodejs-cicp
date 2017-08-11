var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var config = require('./config');
var movieRouter = require('./routes/movie.router');
var actorRouter = require('./routes/actor.router');

var app = express();

app.get('/', (req, res) => {
    res.send('<h1>App Works!</h1>');
});

app.use(bodyParser.json());
app.use(cors());

app.listen(3031, function(){
    console.log('server started @ port 3031.');
    console.log('environment is : ' + process.env.NODE_ENV);
});

app.use('/movie', movieRouter); 
app.use('/actor', actorRouter);

module.exports = app;