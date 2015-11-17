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
    res.json({success: true, message: "User saved!"})
  });
};
