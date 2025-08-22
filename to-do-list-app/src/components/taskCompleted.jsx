export const TaskCompleted = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        data-state="Default"
        className="w-full h-16 p-4 bg-gray-50 rounded-md flex justify-between items-center mb-5"
      >
        {/* Left side (checkbox + text) */}
        <div className="flex items-center gap-2.5">
          <input
            className="w-5 h-5 relative bg-white rounded-sm outline-1 outline-neutral-500"
            type="checkbox"
          />
          <p className={props.isCompleted ? "line-through" : ""}>
            {props.taskName}
          </p>
        </div>

        {/* Right side (delete button only if completed) */}
        {props.isCompleted && (
          <button className="px-3 py-1.5 bg-red-50 rounded-md text-red-500">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
