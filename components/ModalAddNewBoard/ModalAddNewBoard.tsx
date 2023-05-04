"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonCreateNewBoard from "@/components/ButtonCreateNewBoard";
import Dialog from "@/components/Dialog";
import FormBoard from "@/components/FormBoard";
import {
  IAddBoardBody,
  TAddBoardResult,
  TFetchBoardResult,
} from "@/app/api/types";

function ModalAddNewBoard() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const board: TFetchBoardResult = useMemo(
    () => ({
      id: "",
      name: "",
      columns: [],
    }),
    []
  );

  const handleNewBoardClick = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      const { currentTarget } = event;

      const formData = new FormData(currentTarget);

      try {
        const columns = formData
          .getAll("columns")
          .map((column) => ({ name: String(column) }));
        const body: IAddBoardBody = {
          name: String(formData.get("name")),
          columns,
        };
        const res = await fetch("/api/boards", {
          method: "POST",
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          await Promise.reject(new Error("response invalid"));
        }

        const result: TAddBoardResult = await res.json();

        router.push(`/${result.id}`);
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );

  return (
    <>
      <ButtonCreateNewBoard onClick={handleNewBoardClick} />
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <FormBoard
          board={board}
          title="Add New Board"
          submitButton="Create New Board"
          onSubmit={handleSubmit}
        />
      </Dialog>
    </>
  );
}

export default ModalAddNewBoard;
