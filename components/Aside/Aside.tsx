"use client";

import { useState } from "react";
import clsx from "clsx";
import { TFetchBoardsResult } from "@/app/api/types";
import LogoContainer from "@/components/LogoContainer";
import DarkLightSwitcher from "@/components/DarkLightSwitcher";
import BoardsList from "@/components/BoardsList";
import ButtonHideSidebar from "@/components/ButtonHideSidebar";
import ButtonShowSidebar from "@/components/ButtonShowSidebar";

interface IProps {
  boards: TFetchBoardsResult;
}

function Aside({ boards }: IProps) {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <>
      <aside
        className={clsx(
          "sticky top-0 z-20 w-[--sidebar-width] h-screen h-max-screen flex flex-col overflow-hidden transition-[margin] bg-light-1 dark:bg-dark-3",
          !isShowing && "-ml-[--sidebar-width]"
        )}
      >
        <LogoContainer className="flex-[0_0_var(--header-height)]" />
        <div className="pt-[1rem] pb-[.5rem] flex-auto flex flex-col overflow-hidden">
          <BoardsList boards={boards} />
        </div>
        <div className="mb-[.5rem] mx-[1.5rem]">
          <DarkLightSwitcher />
        </div>
        <ButtonHideSidebar onClick={setIsShowing} />
      </aside>
      <ButtonShowSidebar onClick={setIsShowing} />
    </>
  );
}

export default Aside;
