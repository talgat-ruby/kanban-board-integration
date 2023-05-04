import { TFetchBoardsResult } from "@/app/api/types";
import Aside from "@/components/Aside";

async function Sidebar() {
  try {
    const res = await fetch(`${process.env.HOST}/api/boards`);

    if (!res.ok) {
      await Promise.reject(res.statusText);
    }

    const boards: TFetchBoardsResult = await res.json();

    return <Aside boards={boards} />;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default Sidebar;
