import { useCallback } from "react";
import clsx from "clsx";

interface IProps {
  onClick: () => void;
}

function ButtonCreateNewTask({ onClick }: IProps) {
  const handleClick = useCallback(() => onClick(), [onClick]);

  return (
    <button
      className={clsx(
        "w-[10.25rem] h-[3rem] flex items-center justify-center text-[.9375rem] font-bold text-light-1",
        "rounded-[1.5rem]",
        "bg-purple-1 hover:bg-purple-2 focus:bg-purple-2"
      )}
      onClick={handleClick}
    >
      <span className="inline-block font-[.9375rem] font-bold leading-[1.1875rem] text-inherit">
        + Add New Task
      </span>
    </button>
  );
}

export default ButtonCreateNewTask;
