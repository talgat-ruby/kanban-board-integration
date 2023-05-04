import { useCallback } from "react";
import ShowSidebar from "@/components/Icons/ShowSidebar";

interface IProps {
  onClick: (show: boolean) => void;
}

function ButtonShowSidebar({ onClick }: IProps) {
  const handleClick = useCallback(() => onClick(true), [onClick]);

  return (
    <button
      className="fixed z-10 bottom-[2rem] w-[3.5rem] h-[3rem] bg-purple-1 hover:bg-purple-2 focus:bg-purple-2 text-light-1 rounded-r-[6.25rem]"
      onClick={handleClick}
    >
      <ShowSidebar className="ml-[1.125rem] fill-current" />
    </button>
  );
}

export default ButtonShowSidebar;
