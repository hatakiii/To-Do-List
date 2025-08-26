export const TaskCompleted = ({
  handleOnChangeChecked,
  isCompleted,
  taskName,
  index,
  handleDelete,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        data-state="Default"
        className="w-full h-full p-4 bg-gray-50 rounded-md flex justify-between items-center mb-5"
      >
        {/* Left side (checkbox + text) */}
        <div className="flex items-center gap-2.5">
          <input
            onChange={(event) => handleOnChangeChecked(event, index)}
            checked={isCompleted}
            // onClick={() => handleCheck()}
            className="w-5 h-5 relative bg-white rounded-sm outline-neutral-500"
            type="checkbox"
          />
          <p
            className={
              "max-w-[208.5px] overflow-hidden wrap-break-word text-[14px] " +
              `${isCompleted ? "line-through" : ""}`
            }
          >
            {taskName}
          </p>
        </div>

        {/* Right side (delete button only if completed) */}
        {isCompleted && (
          <button
            onClick={() => handleDelete(index)}
            className="px-3 py-1.5 bg-red-50 rounded-md text-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
