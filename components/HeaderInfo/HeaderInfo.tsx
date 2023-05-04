import { TFetchBoardResult } from "@/app/api/types";
import ModalAddNewTask from "@/components/ModalAddNewTask";
import DropdownHeaderActions from "@/components/DropdownHeaderActions";

interface IProps {
  board: TFetchBoardResult;
}

function HeaderInfo({ board }: IProps) {
  return (
    <section className="flex-auto flex">
      <div className="px-[1.5rem] flex-auto flex items-center">
        <h1 className="text-[1.5rem] text-dark-1 font-bold leading-[1.875rem] dark:text-light-1">
          {board.name}
        </h1>
      </div>
      <div className="flex items-center mr-[2rem] space-x-[1.5rem]">
        <ModalAddNewTask columns={board.columns} />
        <DropdownHeaderActions board={board} />
      </div>
    </section>
  );
}

export default HeaderInfo;
