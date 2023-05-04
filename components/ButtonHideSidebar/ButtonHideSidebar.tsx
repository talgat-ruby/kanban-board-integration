import HideSidebar from "@/components/Icons/HideSidebar";
import { useCallback } from "react";
import clsx from "clsx";

interface IProps {
  onClick: (show: boolean) => void;
}

function ButtonHideSidebar({ onClick }: IProps) {
  const handleClick = useCallback(() => onClick(false), [onClick]);

  return (
    <button
      className={clsx(
        "mb-[2rem] mr-[1.5rem] box-content h-[3rem] min-h-[3rem] px-[2rem] flex items-center",
        "rounded-r-[6.25rem]",
        "text-light-4 hover:text-purple-1 focus:text-purple-1 hover:bg-purple-1/10 focus:bg-purple-1/10 dark:hover:bg-light-1 dark:focus:bg-light-1"
      )}
      onClick={handleClick}
    >
      <HideSidebar className="fill-current" />
      <span className="ml-[1rem] font-[.9375rem] font-bold leading-[1.1875rem] text-inherit">
        Hide Sidebar
      </span>
    </button>
  );
}

export default ButtonHideSidebar;
