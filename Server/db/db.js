var mongoose = require("mongoose");
var url = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title: String,
  status: String,
  dueDate: String,
  category: String,
  points: Number,
  notes: String,
  owner: String,
  creator: String,
  comments: [{
      user: String,
      comment: String
    }]
  });

var Task = mongoose.model('Task', taskSchema);

mongoose.connect(url);

var db = mongoose.connection;

module.exports = db;