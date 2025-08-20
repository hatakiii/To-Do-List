const Home = () => {
  return (
    <div className="m-0 p-0 box-border font-[Inter, Inter Fallback]">
      {/* Container */}

      <div className="p-top pt-[60px] bg-[#f3f5f7]">
        {/* Inner Container */}
        <div className="w-[377px] h-[292px] pt-[24px] pb-[24px] pl-[16px] pr-[16px] radius-[8px] mx-auto bg-[#fff] shadow-[0 0 12px rgba(0, 0, 0, 0.16)]">
          {/* Title */}
          <h1 className="text-center text-[#000] text-[20px] font-semibold leading-[28px] mb-[20px]">
            To-Do list
          </h1>
          {/* Form= Input and Button */}
          <form className="h-[40px] flex gap-[6px]">
            <input
              type="text"
              maxLength="100"
              placeholder="Add a new task..."
              className="grow shrink text-[14px] rounded-[6px] px-[16px] border-[1px] border-[#e4e4e7]"
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
            <button className="border-0 cursor-pointer text-[12px] font-medium rounded-[6px] px-[12px] capitalize text-[#fff] bg-[#3c82f6]">
              All
            </button>
            <button className="border-0 cursor-pointer text-[12px] font-medium rounded-[6px] px-[12px] capitalize text-[#363636] bg-[#e5e7eb]">
              Active
            </button>
            <button className="border-0 cursor-pointer text-[12px] font-medium rounded-[6px] px-[12px] capitalize text-[#363636] bg-[#e5e7eb]">
              Completed
            </button>
          </div>
          {/* No tasks to display */}
          <div className="text-[14px] text-[#6b7280] text-center pt-[12px] pb-[40px] ">
            No tasks yet. Add one above!
          </div>
          {/* Footer */}
          <div className="text-[12px] text-[#6b7280] text-center">
            <span>Powered by</span>
            <span className="text-[#3b73ed] ml-[4px]">Pinecone academy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
