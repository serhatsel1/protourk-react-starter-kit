import classNames from "classnames";

const Button = ({children, text, variant = "default" }) => {
  console.log(children);
  return (
    <>
      <button
        className={classNames({
          "flex border hover:bg-red-200 p-2 transition-all rounded w-[300px] h-[100px] shadow-lg": true,
          "bg-red-500": variant === "danger",
          "bg-gray-500": variant === "default",
          "bg-green-500": variant === "success",
          "bg-yeelow-500  ": variant === "warning",
        })}
      >
        {text}
        {children}
        {variant}
      </button>
    </>
  );
};

export default Button;
