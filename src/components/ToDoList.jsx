import React from "react";

function ToDoList({ todos, onDelete, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="todo-checkbox"
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.7 : 1,
              }}
            >
              {todo.text}
            </span>
          </div>
          <button onClick={() => onDelete(todo.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
