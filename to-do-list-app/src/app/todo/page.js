"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterStatus = (status) => setFilterStatus(status);

  const handleOnChange = (event) => setInputValue(event.target.value);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const handleOnChangeCheckBox = (event, index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: event.target.checked } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !todo.isDone;
    return todo.isDone;
  });

  return (
    <div className="p-4">
      {/* Input & Add button */}
      <div className="flex gap-2 mb-4">
        <input
          value={inputValue}
          onChange={handleOnChange}
          type="text"
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          add
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterStatus(status)}
            className={`bg-gray-500 text-white p-2 rounded-md ${
              filterStatus === status ? "!bg-blue-500" : ""
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Todos */}
      {filteredTodos.map((todo, index) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 border-b border-gray-300 p-2 w-fit"
        >
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={(event) => handleOnChangeCheckBox(event, index)}
          />
          <p className={todo.isDone ? "line-through text-gray-500" : ""}>
            {todo.title}
          </p>
          <button
            onClick={() => handleDeleteTodo(index)}
            className="text-red-500"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoPage;
