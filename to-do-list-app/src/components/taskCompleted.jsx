export const TaskCompleted = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        data-state="Default"
        className="w-[100%] h-16 p-4 bg-gray-50 rounded-md inline-flex justify-start items-center gap-2.5"
      >
        <div className="flex justify-start items-center gap-2.5">
          <input
            className="w-5 h-5 relative bg-white rounded-sm  outline-1 outline-neutral-500"
            type="checkbox"
          ></input>
          <div className="justify-start text-black text-sm ">Create PR 2</div>
        </div>
      </div>
      <div
        data-state="Checked"
        className="w-[100%] h-16 p-4 bg-gray-50 rounded-md inline-flex justify-between items-center"
      >
        <div className="flex justify-start items-center gap-2.5">
          <input
            className="w-5 h-5 relative bg-white rounded-sm  outline-1 outline-neutral-500"
            type="checkbox"
          ></input>

          <div className="justify-start text-black text-sm  line-through">
            Create PR
          </div>
        </div>
        <div className="self-stretch px-3 py-1.5 bg-red-50 rounded-md flex justify-center items-center gap-2.5">
          <div className="justify-start text-red-500  ">Delete</div>
        </div>
      </div>
    </div>
  );
};
