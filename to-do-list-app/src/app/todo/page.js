"use client";

import { useState } from "react";

import { TaskCompleted, NoTask, Title } from "@/components";

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
      { title: inputValue, isCompleted: false, id: uuidv4() },
      ...todos,
    ]);
    setInputValue("");
    setFilterStatus("all");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOnChangeChecked = (event, id) => {
    // console.log(event.target.checked, index);
    const newTodos = todos.map((el, i) => {
      if (el.id === id) {
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

  return (
    <div className="m-0 p-0 box-border font-inter">
      {/* Container */}

      <div className="p-top pt-[60px] bg-[#f3f5f7] min-h-[100vh]">
        {/* Inner Container */}
        <div
          className="w-[377px]  pt-[24px] pb-[24px] pl-[16px] pr-[16px] rounded-[6px] mx-auto bg-[#fff] shadow-[0_0_12px_rgba(0,0,0,0.16)]
"
        >
          {/* Title */}
          <Title></Title>
          {/* Form= Input and Button */}
          <form className="h-[40px] flex gap-[6px]" onClick={handleOnClick}>
            <input
              value={inputValue}
              type="text"
              onChange={handleOnChange}
              maxLength="100"
              placeholder="Add a new task..."
              className="w-72 h-10 px-4 py-2 rounded-md outline-1 outline-offset-[-1px] outline-border-border-border inline-flex flex-col justify-center items-start"
            ></input>
            <button
              type="submit"
              className="w-[59px] border-0 cursor-pointer text-[14px] text-[#f9f9f9] rounded-[6px] px-[16px] bg-[#3c82f6]  active:bg-blue-600 hover:bg-blue-700"
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
                  "border-0 cursor-pointer text-neutral-700 text-xs font-normal rounded-[6px] px-[12px] capitalize bg-[#e5e7eb] " +
                  `${
                    filterStatus === status
                      ? "!bg-[#3c82f6] !text-[#fff] hover:!bg-blue-700"
                      : ""
                  }`
                }
              >
                {status}
              </button>
            ))}
          </div>
          {/* No tasks to display */}
          {filteredTodos.length === 0 && <NoTask />}
          {filteredTodos.map((todo) => (
            <TaskCompleted
              key={todo.id}
              id={todo.id}
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
              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="border-0 text-[14px] cursor-pointer  text-[#ef4444] bg-transparent hover:bg-red-100 active:bg-red-200"
                >
                  Clear completed
                </button>
              )}
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
