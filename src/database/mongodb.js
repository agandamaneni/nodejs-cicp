var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/myapp';

var mongoosedb = mongoose.connect(dbURI,{ useMongoClient: true });

// If the connection is successful
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

mongoose.Promise = global.Promise;
module.exports = mongoosedb;