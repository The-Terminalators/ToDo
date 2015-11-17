var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({

  entry: String,
  done: Boolean

});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
