const Todo = require('../models/Todo');

// Controlador para obtener todas las tareas
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las tareas');
  }
};

// Controlador para crear una nueva tarea
exports.createTodo = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const newTodo = new Todo({ title, description, category });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la tarea');
  }
};

// Otros controladores para actualizar, eliminar y obtener tareas por ID
// Implementa estos controladores de acuerdo a tus necesidades.

// Ejemplo:
// exports.updateTodo = async (req, res) => { /* Lógica para actualizar una tarea */ }
// exports.deleteTodo = async (req, res) => { /* Lógica para eliminar una tarea */ }
