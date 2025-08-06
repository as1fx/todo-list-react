import React, { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          text: newTodo,
          id: Date.now(),
          completed: false,
        },
      ]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h2>📝 To-Do List</h2>
      <ToDoInput onAdd={addTodo} />
      <ToDoList todos={todos} onDelete={deleteTodo} onToggle={toggleComplete} />
    </div>
  );
};

export default App;
