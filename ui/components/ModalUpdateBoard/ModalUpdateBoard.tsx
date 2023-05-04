"use client";

import { FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import FormBoard from "@/components/FormBoard";
import Dialog from "@/components/Dialog";
import {
  IUpdateBoardBody,
  TFetchBoardResult,
  TUpdateBoardResult,
} from "@/app/api/types";

interface IColumn {
  id?: string;
  name: string;
}

interface IProps {
  board: TFetchBoardResult;
  open: boolean;
  onClose: () => void;
}

function ModalUpdateBoard({ board, open, onClose }: IProps) {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      const { currentTarget } = event;
      const { dataset, elements } = currentTarget;

      try {
        const id = dataset.id ?? "";
        const formData = new FormData(currentTarget);

        const columnsEl = elements.namedItem("columns");
        const columnsNodeList =
          columnsEl instanceof RadioNodeList ? columnsEl : new RadioNodeList();

        const columns: IColumn[] = [...columnsNodeList]
          .map((columnNode) => {
            if (columnNode instanceof HTMLInputElement) {
              const { dataset, value } = columnNode;

              return dataset.id
                ? { id: dataset.id, name: value }
                : { name: value };
            }
          })
          .filter((value): value is IColumn => !!value);

        const body: IUpdateBoardBody = {
          name: String(formData.get("name")),
          columns: columns,
        };
        const res = await fetch(`/api/boards/${id}`, {
          method: "PUT",
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          await Promise.reject(new Error("response invalid"));
        }

        const result: TUpdateBoardResult = await res.json();

        router.refresh();
      } catch (err) {
        console.error(err);
      }
    },
    [router]
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <FormBoard
        board={board}
        title="Edit Board"
        submitButton="Save Changes"
        onSubmit={handleSubmit}
      />
    </Dialog>
  );
}

export default ModalUpdateBoard;
