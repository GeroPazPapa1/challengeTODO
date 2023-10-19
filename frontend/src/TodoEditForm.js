// TodoEditForm.js
import React, { useState } from 'react';

const TodoEditForm = ({ todo, onTodoEdit }) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const handleSubmit = () => {
    onTodoEdit(editedTodo);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={editedTodo.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        value={editedTodo.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        value={editedTodo.category}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default TodoEditForm;
