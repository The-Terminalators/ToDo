var Todo = require('..models/todos.js');


// index action
function index(req,res){
  Todo.find({}, function(err,todos){
    if(err) throw err;
    res.json(todos);
  });
};

// create action
function create(req,res){
  var todo = new Todo
  todo.body = req.body.body
  todo.done = req.body.done

  todo.save(function(err){
    if(err) throw err;
    res.json({success: true, message: "List saved!"})
  });
};

// destroy action
function destroy(req,res){
  Todo.remove({},function(err){
    if(err) throw err;
    res.json({success: true, message: "List deleted!"})
  });
};

module.exports = {
  index: index,
  create: create,
  destroy: destroy
}
