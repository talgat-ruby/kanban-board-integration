import { useCallback } from "react";
import clsx from "clsx";
import Board from "@/components/Icons/Board";

interface IProps {
  onClick: () => void;
}

function ButtonCreateNewBoard({ onClick }: IProps) {
  const handleClick = useCallback(() => onClick(), [onClick]);

  return (
    <button
      className={clsx(
        "mr-[1.5rem] box-content h-[3rem] min-h-[3rem] px-[2rem] flex items-center",
        "rounded-r-[6.25rem]",
        "text-purple-1 hover:text-purple-2 focus:text-purple-2"
      )}
      onClick={handleClick}
    >
      <div className="w-[1rem] h-[1rem]">
        <Board className="fill-current" />
      </div>
      <span className="inline-block ml-[1rem] font-[.9375rem] font-bold leading-[1.1875rem] text-inherit">
        + Create New Board
      </span>
    </button>
  );
}

export default ButtonCreateNewBoard;
