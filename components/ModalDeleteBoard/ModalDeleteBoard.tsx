"use client";

import { FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/Dialog";
import FormConfirmation from "@/components/FormConfirmation";
import { TDeleteBoardResult, TFetchBoardResult } from "@/app/api/types";

interface IColumn {
  id?: string;
  name: string;
}

interface IProps {
  board: TFetchBoardResult;
  open: boolean;
  onClose: () => void;
}

function ModalDeleteBoard({ board, open, onClose }: IProps) {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      const { currentTarget } = event;
      const { dataset } = currentTarget;

      const id = String(dataset.id);

      try {
        const res = await fetch(`${process.env.HOST}/api/boards/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          await Promise.reject(new Error("response invalid"));
        }

        const result: TDeleteBoardResult = await res.json();

        router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <FormConfirmation
        id={board.id}
        title="Delete this board?"
        description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Dialog>
  );
}

export default ModalDeleteBoard;
