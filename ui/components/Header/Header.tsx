import LogoContainer from "@/components/LogoContainer";
import HeaderInfo from "@/components/HeaderInfo";
import { TFetchBoardResult } from "@/app/api/types";

interface IProps {
  board?: TFetchBoardResult;
}

function Header({ board }: IProps) {
  return (
    <header className="fixed w-full h-[--header-height] flex bg-light-1 dark:bg-dark-3">
      <LogoContainer className="w-[--sidebar-width] box-content border-r border-light-2 dark:border-dark-2" />
      {board?.id && <HeaderInfo board={board} />}
    </header>
  );
}

export default Header;
