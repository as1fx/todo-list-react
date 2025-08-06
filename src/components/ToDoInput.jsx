import React, { useState } from "react";

function ToDoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      onAdd(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ToDoInput;
