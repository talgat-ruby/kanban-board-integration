"use client";

import { MouseEvent, ReactNode, useCallback, useEffect, useRef } from "react";
import clsx from "clsx";

interface IProps {
  open?: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Dialog({ open = false, onClose, children }: IProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current?.open === false && open) {
      dialogRef.current.showModal();
    } else if (dialogRef.current?.open === true && !open) {
      dialogRef.current.close();
    }
  }, [open]);

  const handleDialogClick = useCallback(
    (event: MouseEvent<HTMLDialogElement>) => {
      const { target, currentTarget } = event;
      if (target === currentTarget) {
        currentTarget.close();
      }
    },
    []
  );

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onClose={onClose}
      className={clsx(
        "p-0 text-light-4 rounded-[0.375rem]",
        "grid [&:not([open])]:opacity-0 [&:not([open])]:invisible [&:not([open])]:pointer-events-none",
        "[&::backdrop]:bg-black/50 [&::backdrop]:transition",
        "bg-light-1 dark:bg-dark-3"
      )}
    >
      {children}
    </dialog>
  );
}

export default Dialog;
