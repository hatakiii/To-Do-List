export const TaskCompleted = ({
  handleOnChangeChecked,
  isCompleted,
  taskName,
  index,
  handleDelete,
  id,
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
            onChange={(event) => handleOnChangeChecked(event, id)}
            checked={isCompleted}
            className="w-5 h-5 relative bg-white rounded-sm outline-neutral-500"
            type="checkbox"
          />
          <p
            className={
              "max-w-[208.5px] overflow-hidden break-words text-[14px] " +
              `${isCompleted ? "line-through" : ""}`
            }
          >
            {taskName}
          </p>
        </div>

        {/* Right side (delete button only if completed) */}
        {isCompleted ? (
          <button
            onClick={() => handleDelete(id)}
            className="px-3 min-h-[30px] bg-red-50 rounded-md text-red-500"
          >
            Delete
          </button>
        ) : (
          <div className="px-3 min-h-[30px] invisible">Delete</div>
        )}
      </div>
    </div>
  );
};
