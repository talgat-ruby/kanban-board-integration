import { useCallback } from "react";

interface IProps {
  onClick: () => void;
}

function ButtonDeleteBoard({ onClick }: IProps) {
  const handleClick = useCallback(() => onClick(), [onClick]);

  return (
    <button
      className="flex-auto flex items-center px-[1rem] bg-light-1 hover:bg-purple-1/10 dark:bg-dark-2 dark:hover:bg-light-2"
      onClick={handleClick}
    >
      <span className="text-red-1 text-[0.8125rem] font-medium leading-[1.4375rem]">
        Delete Board
      </span>
    </button>
  );
}

export default ButtonDeleteBoard;
