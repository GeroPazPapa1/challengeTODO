// TodoList.js
import React from 'react';

const TodoList = ({ todos, onTodoEdit, onTodoDelete, onTodoToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <span>{todo.description}</span>
          <span>{todo.category}</span>
          <button onClick={() => onTodoEdit(todo)}>Edit</button>
          <button onClick={() => onTodoDelete(todo.id)}>Delete</button>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onTodoToggle(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
