"use client";

import { useCallback, useId, useState } from "react";
import { useSelect } from "downshift";
import clsx from "clsx";
import Ellipsis from "@/components/Icons/Ellipsis";
import ModalUpdateBoard from "@/components/ModalUpdateBoard";
import ModalDeleteBoard from "@/components/ModalDeleteBoard";
import { TFetchBoardResult } from "@/app/api/types";
import ButtonUpdateBoard from "@/components/ButtonUpdateBoard";
import ButtonDeleteBoard from "@/components/ButtonDeleteBoard";

type Action = "update" | "delete";

const actions: Action[] = ["update", "delete"];

interface IProps {
  board: TFetchBoardResult;
}

function DropdownHeaderActions({ board }: IProps) {
  const id = useId();
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      id,
      items: actions,
    });

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleUpdateDialogOpen = useCallback(
    () => setOpenUpdateDialog(true),
    []
  );

  const handleUpdateDialogClose = useCallback(
    () => setOpenUpdateDialog(false),
    []
  );

  const handleDeleteDialogOpen = useCallback(
    () => setOpenDeleteDialog(true),
    []
  );

  const handleDeleteDialogClose = useCallback(
    () => setOpenDeleteDialog(false),
    []
  );

  return (
    <div className="relative inline-block">
      <div>
        <button
          className="w-[1.25rem] h-[1.25rem] flex justify-center text-light-4"
          type="button"
          {...getToggleButtonProps()}
        >
          <Ellipsis className="fill-current" />
        </button>
      </div>
      <menu
        className={clsx(
          "absolute right-0 mt-[2rem] rounded-[.5rem] overflow-hidden shadow-[0_10px_20px_tomato] shadow-shadow/[.25]",
          "animate-[growDown_300ms_ease-in-out_forwards] origin-[top_center]",
          !isOpen && "hidden"
        )}
        {...getMenuProps()}
      >
        {actions.map((action, index) => (
          <li
            key={index}
            className="w-[12rem] h-[2.9375rem] flex"
            {...getItemProps({ item: action, index })}
          >
            {action === "update" ? (
              <ButtonUpdateBoard onClick={handleUpdateDialogOpen} />
            ) : action === "delete" ? (
              <ButtonDeleteBoard onClick={handleDeleteDialogOpen} />
            ) : null}
          </li>
        ))}
      </menu>
      <ModalUpdateBoard
        board={board}
        open={openUpdateDialog}
        onClose={handleUpdateDialogClose}
      />
      <ModalDeleteBoard
        board={board}
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
      />
    </div>
  );
}

export default DropdownHeaderActions;
