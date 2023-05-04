import Link from "next/link";
import clsx from "clsx";
import { TFetchBoardsResult } from "@/app/api/types";
import Board from "@/components/Icons/Board";
import { useParams } from "next/navigation";
import ModalAddNewBoard from "@/components/ModalAddNewBoard";

interface IProps {
  boards: TFetchBoardsResult;
}

function BoardsList({ boards }: IProps) {
  const params = useParams();

  return (
    <div className="flex-auto flex flex-col overflow-hidden">
      <span className="pl-[2rem] text-xs font-bold tracking-[.15rem] text-light-4">
        ALL BOARDS ({boards.length})
      </span>
      <ul className="mt-[1.125rem] flex-initial overflow-y-auto">
        {boards.map(({ id, name }) => (
          <li key={id} className="mr-[1.5rem]">
            <Link
              href={`/${id}`}
              className={clsx(
                "h-[3rem] px-[2rem] flex items-center rounded-r-[6.25rem]",
                params.boardId === id
                  ? "bg-purple-1 text-light-1"
                  : "text-light-4 hover:text-purple-1 hover:bg-purple-1/10 dark:hover:bg-light-1"
              )}
            >
              <div className="w-[1rem] h-[1rem]">
                <Board className="fill-current" />
              </div>
              <span className="inline-block ml-[1rem] font-[.9375rem] font-bold leading-[1.1875rem] truncate text-inherit">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ModalAddNewBoard />
    </div>
  );
}

export default BoardsList;
