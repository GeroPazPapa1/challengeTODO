// TodoFilter.js
import React from 'react';

const TodoFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TodoFilter;
