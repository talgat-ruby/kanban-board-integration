"use client";

import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@/components/Dialog";
import FormTask from "@/components/FormTask";
import ButtonUpdateTask from "@/components/ButtonUpdateTask";
import {
  IUpdateTaskBody,
  TFetchBoardResult,
  TUpdateTaskResult,
} from "@/app/api/types";

interface ISubtask {
  id?: string;
  title: string;
}

interface IColumn {
  id: string;
  name: string;
}

interface IProps {
  task: Pick<
    TFetchBoardResult["columns"][number]["tasks"][number],
    "id" | "title" | "description" | "subtasks"
  >;
  columns: IColumn[];
}

function ModalUpdateTask({ task, columns }: IProps) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const handleNewTaskClick = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      const { currentTarget } = event;
      const { dataset, elements } = currentTarget;

      try {
        const id = dataset.id ?? "";
        const formData = new FormData(currentTarget);

        const subtasksEl = elements.namedItem("subtasks");
        const subtasksNodeList =
          subtasksEl instanceof RadioNodeList
            ? subtasksEl
            : new RadioNodeList();

        const subtasks: ISubtask[] = [...subtasksNodeList]
          .map((columnNode) => {
            if (columnNode instanceof HTMLInputElement) {
              const { dataset, value } = columnNode;

              return dataset.id
                ? { id: dataset.id, title: value }
                : { title: value };
            }
          })
          .filter((value): value is ISubtask => !!value);

        const body: IUpdateTaskBody = {
          title: String(formData.get("title")),
          description: String(formData.get("description")),
          columnId: String(formData.get("column")),
          subtasks,
        };
        const res = await fetch(`/api/tasks/${id}`, {
          method: "PUT",
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          await Promise.reject(new Error("response invalid"));
        }

        const result: TUpdateTaskResult = await res.json();

        router.refresh();
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );

  return (
    <div>
      <ButtonUpdateTask onClick={handleNewTaskClick} />
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <FormTask
          task={task}
          title="Edit Task"
          columns={columns}
          submitButton="Save Changes"
          onSubmit={handleSubmit}
        />
      </Dialog>
    </div>
  );
}

export default ModalUpdateTask;
