"use client";

import { useState } from "react";

import { Button, TaskCompleted, NoTask } from "@/components";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterStatus = (status) => setFilterStatus(status);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { title: inputValue, isCompleted: false, id: uuidv4() },
    ]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleOnChangeChecked = (event, index) => {
    // console.log(event.target.checked, index);
    const newTodos = todos.map((el, i) => {
      if (i === index) {
        el.isCompleted = event.target.checked;
      }
      return el;
    });
    setTodos(newTodos);
  };
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !todo.isCompleted;
    return todo.isCompleted;
  });

  // console.log(todos);
  return (
    <div className="m-0 p-0 box-border font-[Inter, Inter Fallback] ">
      {/* Container */}

      <div className="p-top pt-[60px] bg-[#f3f5f7] min-h-[100vh]">
        {/* Inner Container */}
        <div
          className="w-[377px]  pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[6px] mx-auto bg-[#fff] shadow-[0_0_12px_rgba(0,0,0,0.16)]
"
        >
          {/* Title */}
          <h1 className="text-center text-[#000] text-[20px] font-semibold leading-[28px] mb-[20px] tracking-[-2.5%]">
            To-Do list
          </h1>
          {/* Form= Input and Button */}
          <form className="h-[40px] flex gap-[6px]" onClick={handleOnClick}>
            <input
              value={inputValue}
              type="text"
              onChange={handleOnChange}
              maxLength="100"
              placeholder="Add a new task..."
              className="grow shrink text-[14px] rounded-[6px] px-[16px] border-[1px] border-[#e4e4e7] text-[#71717A]"
            ></input>
            <button
              type="submit"
              className="w-[59px] border-0 cursor-pointer text-[14px] text-[#f9f9f9] rounded-[6px] px-[16px] bg-[#3c82f6]"
            >
              Add
            </button>
          </form>
          {/* Filter Buttons */}
          <div className="h-[32px] flex gap-[6px] mt-[20px] mb-[20px]">
            {["all", "active", "completed"].map((status) => (
              <button
                key={status}
                onClick={() => handleFilterStatus(status)}
                className={
                  "border-0 cursor-pointer text-[12px] font-medium rounded-[6px] px-[12px] capitalize text-[#363636] bg-[#e5e7eb] " +
                  `${
                    filterStatus === status ? "!bg-[#3c82f6] !text-[#fff]" : ""
                  }`
                }
              >
                {status}
              </button>
            ))}
          </div>
          {/* No tasks to display */}
          {filteredTodos.length === 0 && <NoTask />}
          {filteredTodos.map((todo, index) => (
            <TaskCompleted
              key={todo.id}
              index={index}
              taskName={todo.title}
              isCompleted={todo.isCompleted}
              handleDelete={handleDelete}
              handleOnChangeChecked={handleOnChangeChecked}
            ></TaskCompleted>
          ))}

          {/* Clear completed */}
          {filteredTodos.length !== 0 && (
            <div className="flex pt-4 mb-10   justify-between items-center border-t-[1px] border-t-[#e5e7eb]">
              <p className="text-[14px] text-gray-500 ">
                {completedCount} of {todos.length} tasks completed
              </p>
              <button
                onClick={handleClearCompleted}
                className="border-0 text-[14px] cursor-pointer  text-[#ef4444] bg-transparent"
              >
                Clear completed
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="text-[12px] text-[#6b7280] text-center leading-[14.5px]">
            <span>Powered by</span>
            <a className="text-[#3b73ed] ml-[4px]">Pinecone academy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
