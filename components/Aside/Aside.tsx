"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { IBoard } from "@/types/boards";

interface IProps {
  boards: IBoard[];
}

function Aside({ boards }: IProps) {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <aside>
      <ul className={clsx(!isShowing && "invisible")}>
        {boards.map((board) => (
          <li key={board.id}>
            <Link href={`/${board.id}`}>{board.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsShowing((prevIsShowing) => !prevIsShowing)}>
        {isShowing ? "Hide" : "Show"}
      </button>
    </aside>
  );
}

export default Aside;
