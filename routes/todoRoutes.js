var todoRouter = require('express').Router();
var todoController = require('../controllers/todoController.js');

todoRouter.route('/todos')
.get(todoController.allTodos)
.post(todoController.create)

todoRouter.route('/todos/:id')
.delete(todoController.destroy)

module.exports = todoRouter;
