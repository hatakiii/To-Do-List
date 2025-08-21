export const Button = (props) => {
  return (
    <button
      className="border-0 cursor-pointer text-[12px] font-medium rounded-[6px] px-[12px] capitalize text-[#fff] bg-[#3c82f6]"
      style={{ color: props.color, background: props.background }}
    >
      {props.content}
    </button>
  );
};
