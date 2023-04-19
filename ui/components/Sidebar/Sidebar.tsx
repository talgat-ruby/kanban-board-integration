import { IBoard } from "@/types/boards";
import Aside from "@/components/Aside";

interface IProps {
  boardId?: string;
}

async function Sidebar({ boardId }: IProps) {
  try {
    const res = await fetch("http://localhost:3000/api/boards");

    if (!res.ok) {
      await Promise.reject(res.statusText);
    }

    const boards: IBoard[] = await res.json();

    return <Aside boardId={boards} boards={boards} />;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default Sidebar;
