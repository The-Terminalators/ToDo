var todoRouter = require('express').Router();
var todoController = require('../controllers/todoController.js');

todoRouter.route('/todos').get(todoController.allTodos);

module.exports = todoRouter;
