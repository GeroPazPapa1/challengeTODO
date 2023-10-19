const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Rutas para las operaciones CRUD de las tareas
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
