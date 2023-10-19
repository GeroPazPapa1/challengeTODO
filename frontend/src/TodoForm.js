// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onTodoAdd }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = () => {
    onTodoAdd(newTodo);
    setNewTodo({ title: '', description: '', category: '' });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newTodo.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={newTodo.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={newTodo.category}
        onChange={handleInputChange}
        placeholder="Category"
      />
      <button onClick={handleSubmit}>Add TODO</button>
    </div>
  );
};

export default TodoForm;
