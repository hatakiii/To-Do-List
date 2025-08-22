"use client";

import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  // Zovhon darah uyd l ajilladag function bichne
  const handleOnClick = () => {
    setTodos([...todos, { title: inputValue, isDone: true }]);
    setInputValue("");
  };
  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder="add todo"
        onChange={handleOnchange}
      />
      {todos.map((todo, index) => (
        <div className="flex gap-10" key={index + Math.random()}>
          <input type="checkbox" defaultChecked={todo.isDone} />
          <div key={index}>{todo.title}</div>
        </div>
      ))}
      <button onClick={handleOnClick}>add</button>
    </div>
  );
};

export default TodoPage;
