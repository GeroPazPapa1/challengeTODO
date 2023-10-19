// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoEditForm from './TodoEditForm';
import TodoFilter from './TodoFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [editTodo, setEditTodo] = useState(null;

  const apiUrl = 'http://localhost:3000/api/todos'; // Reemplaza con tu URL de la API

  // Obtener la lista de TODOs desde el backend al cargar la aplicación (puedes usar useEffect).
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching TODOs:', error));
  }, []);

  const handleAddTodo = (newTodo) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]); // Agregar el nuevo TODO a la lista
      })
      .catch((error) => console.error('Error adding TODO:', error));
  };

  const handleEditTodo = (editedTodo) => {
    fetch(`${apiUrl}/${editedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === data.id ? data : todo
        );
        setTodos(updatedTodos); // Actualizar el TODO editado en la lista
      })
      .catch((error) => console.error('Error editing TODO:', error));
  };

  const handleDeleteTodo = (todoId) => {
    fetch(`${apiUrl}/${todoId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos); // Eliminar el TODO de la lista
      })
      .catch((error) => console.error('Error deleting TODO:', error));
  };

  const handleToggleTodo = (todoId) => {
    const todoToToggle = todos.find((todo) => todo.id === todoId);
    if (!todoToToggle) {
      return;
    }
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    fetch(`${apiUrl}/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === data.id ? data : todo
        );
        setTodos(updatedTodos); // Actualizar el estado del TODO en la lista
      })
      .catch((error) => console.error('Error toggling TODO:', error));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>TODO Application</h1>
      <TodoForm onTodoAdd={handleAddTodo} />
      <TodoFilter
        categories={['Work', 'Personal', 'Shopping']}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      {editTodo ? (
        <TodoEditForm todo={editTodo} onTodoEdit={handleEditTodo} />
      ) : null}
      <TodoList
        todos={todos}
        onTodoEdit={(todo) => setEditTodo(todo)}
        onTodoDelete={handleDeleteTodo}
        onTodoToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App;
