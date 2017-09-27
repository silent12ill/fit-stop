var mongoose = require('mongoose');
var dbUri = require('./dbInfo').dbUri;

var Schema = mongoose.Schema;

mongoose.connect('mongodb://' + dbUri);

mongoose.connection.once('open', function() {
  console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});

var exerciseSchema = new Schema({
  name: String,
  description: String,
  type: String,
  picture: String,
  environment: String,
  muscleGroup: String,
  difficulty: String
});

var userSchema = new Schema({
  username: String,
  password: String,
  preferences: {},
  workoutHistory: []
});

var Exercise = mongoose.model('Exercise', exerciseSchema);
var User = mongoose.model('User', userSchema);

module.exports.exerciseModel = Exercise;
module.exports.userModel = User;
module.exports.mongoose = mongoose;
