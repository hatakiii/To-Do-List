import { Button, Task, TaskCompleted } from "@/components";

const Home = () => {
  const data = [
    {
      taskName: "Hool hiih",
      isCompleted: false,
    },
  ];
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
          <form className="h-[40px] flex gap-[6px]">
            <input
              type="text"
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
            <Button color="#fff" background="#3c82f6" content="All"></Button>
            <Button
              color="#363636"
              background="#e5e7eb"
              content="Active"
            ></Button>
            <Button
              color="#363636"
              background="#e5e7eb"
              content="Completed"
            ></Button>
          </div>
          {/* No tasks to display */}
          {/* <Task /> */}
          <TaskCompleted />

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
