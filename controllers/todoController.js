var Todo = require('../models/todos.js');

// index action
function index(req,res){
  Todo.find({}, function(err,todos){
    if(err) console.log(err);
    res.json(todos);
  });
};


// create action
function create(req,res){
  var todo = new Todo;
  todo.entry = req.body.entry;
  todo.done  = req.body.done;

  todo.save(function(err){
    if(err) console.log(err);
    res.json({success: true, message: "Item saved!"})
  });
};

// destroy action
function destroy(req,res){
  Todo.remove( { _id : req.params.id } ,function(err){
    if(err) console.log(err);
    res.json({success: true, message: "Item deleted!"})
  });
};


module.exports = {
                    allTodos: index,
                    create: create,
                    destroy: destroy

                  }
