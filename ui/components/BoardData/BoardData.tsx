import Header from "@/components/Header";
import BoardViewer from "@/components/BoardViewer";
import { TFetchBoardResult } from "@/app/api/types";

interface IProps {
  boardId?: string;
}

async function BoardData({ boardId }: IProps) {
  if (!boardId) {
    return (
      <>
        <Header />
        <main className="flex-auto mt-[var(--header-height)] bg-light-2 dark:bg-dark-2">
          Main
        </main>
      </>
    );
  }

  try {
    const res = await fetch(`${process.env.HOST}/api/boards/${boardId}`);

    if (!res.ok) {
      await Promise.reject(res.statusText);
    }

    const board: TFetchBoardResult = await res.json();

    return (
      <>
        <Header board={board} />
        {/* @ts-ignore */}
        <BoardViewer board={board} />
      </>
    );
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default BoardData;
