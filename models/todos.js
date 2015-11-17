var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({

  body: String,
  done: Boolean

});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
