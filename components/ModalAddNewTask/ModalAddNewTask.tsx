"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/Dialog";
import {
  IAddTaskBody,
  TAddTaskResult,
  TFetchTaskResult,
} from "@/app/api/types";
import ButtonCreateNewTask from "@/components/ButtonCreateNewTask";
import FormTask from "@/components/FormTask";

interface IColumn {
  id: string;
  name: string;
}

interface IProps {
  columns: IColumn[];
}

function ModalAddNewTask({ columns }: IProps) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const task: TFetchTaskResult = useMemo(
    () => ({
      id: "",
      title: "",
      description: "",
      subtasks: [],
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
        const subtasks = formData
          .getAll("subtasks")
          .map((subtask) => ({ title: String(subtask) }));
        const body: IAddTaskBody = {
          title: String(formData.get("title")),
          description: String(formData.get("description")),
          columnId: String(formData.get("column")),
          subtasks,
        };
        const res = await fetch("/api/tasks", {
          method: "POST",
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          await Promise.reject(new Error("response invalid"));
        }

        const result: TAddTaskResult = await res.json();

        router.refresh();
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );

  return (
    <div>
      <ButtonCreateNewTask onClick={handleNewBoardClick} />
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <FormTask
          task={task}
          title="Add New Task"
          columns={columns}
          submitButton="Create New Task"
          onSubmit={handleSubmit}
        />
      </Dialog>
    </div>
  );
}

export default ModalAddNewTask;
