"use client";

import { DragEvent, FormEvent, MouseEvent, useCallback, useState } from "react";
import clsx from "clsx";
import Cross from "@/components/Icons/Cross";
import Drag from "@/components/Icons/Drag";
import { TFetchBoardResult } from "@/app/api/types";

interface ISubtask {
  id: string;
  title: string;
  isLocal: boolean;
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
  title: string;
  columns: IColumn[];
  submitButton: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function FormTask({ task, title, columns, submitButton, onSubmit }: IProps) {
  const [subtasks, setSubtasks] = useState<ISubtask[]>(
    task.subtasks.map(({ id, title }) => ({ id, title, isLocal: false }))
  );

  const handleAddSubtaskClick = useCallback(() => {
    setSubtasks((prevSubtasks) => [
      ...prevSubtasks,
      { id: crypto.randomUUID(), title: "", isLocal: true },
    ]);
  }, []);

  const handleDeleteSubtaskClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { currentTarget } = event;
      const { dataset } = currentTarget;

      setSubtasks((prevSubtasks) =>
        prevSubtasks.filter(({ id }) => id !== dataset.id)
      );
    },
    []
  );

  const handleDragStart = useCallback((event: DragEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    currentTarget.parentElement?.classList.add("opacity-20", "rotate-[10deg]");
  }, []);

  const handleDrag = useCallback((event: DragEvent<HTMLButtonElement>) => {
    console.log("drag");
  }, []);

  const handleDragEnd = useCallback((event: DragEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    currentTarget.parentElement?.classList.remove(
      "opacity-20",
      "rotate-[10deg]"
    );
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLLIElement>) => {
    console.log("dragover");
  }, []);

  return (
    <form
      data-id={task.id}
      method="dialog"
      className="w-[30rem] p-[2rem]"
      onSubmit={onSubmit}
    >
      <header className="mb-[1.5rem]">
        <h3
          className={clsx(
            "text-[1.125rem] font-bold leading-[1.4375rem]",
            "text-dark-1 dark:text-light-1"
          )}
        >
          {title}
        </h3>
      </header>
      <article className="space-y-[1.5rem]">
        <section className="flex flex-col">
          <label className="flex flex-col">
            <span
              className={clsx(
                "mb-[.5rem] text-[.75rem] font-bold leading-[.9375rem]",
                "text-light-4 dark:text-light-1"
              )}
            >
              Name
            </span>
            <input
              type="text"
              name="title"
              placeholder="e.g. Web Design"
              className={clsx(
                "relative flex-auto h-[2.5rem] px-[1rem] bg-transparent text-[.8125rem] leading-[1.4375rem] rounded-[.25rem]",
                "border-solid border",
                "text-dark-1 dark:text-light-1 placeholder:text-dark-1/[0.25] dark:placeholder:text-light-1/[0.25]",
                "outline-fuchsia-800 border-light-4/[.25] hover:border-purple-1"
              )}
              defaultValue={task.title}
            />
          </label>
        </section>
        <section className="flex flex-col">
          <label className="flex flex-col">
            <span
              className={clsx(
                "mb-[.5rem] text-[.75rem] font-bold leading-[.9375rem]",
                "text-light-4 dark:text-light-1"
              )}
            >
              Description
            </span>
            <textarea
              name="description"
              placeholder="e.g. Web Design"
              className={clsx(
                "relative flex-auto h-[2.5rem] px-[1rem] bg-transparent text-[.8125rem] leading-[1.4375rem] rounded-[.25rem]",
                "border-solid border",
                "text-dark-1 dark:text-light-1 placeholder:text-dark-1/[0.25] dark:placeholder:text-light-1/[0.25]",
                "outline-fuchsia-800 border-light-4/[.25] hover:border-purple-1"
              )}
              defaultValue={task.description}
            />
          </label>
        </section>
        <section className="flex flex-col">
          <label
            className={clsx(
              "mb-[.5rem] text-[.75rem] font-bold leading-[.9375rem]",
              "text-light-4 dark:text-light-1"
            )}
          >
            Subtasks
          </label>
          <ul className="space-y-[.75rem]">
            {subtasks.map((subtask) => (
              <li
                key={subtask.id}
                className="flex items-center space-x-[1rem]"
                onDragOver={handleDragOver}
              >
                <button
                  type="button"
                  className="hover:text-purple-1 cursor-grab"
                  draggable
                  onDragStart={handleDragStart}
                  onDrag={handleDrag}
                  onDragEnd={handleDragEnd}
                >
                  <Drag className="w-[1rem] fill-current" />
                </button>
                <input
                  type="text"
                  name="subtasks"
                  placeholder="e.g. Backlog, Done"
                  className={clsx(
                    "flex-auto h-[2.5rem] px-[1rem] bg-transparent text-[.8125rem] leading-[1.4375rem] rounded-[.25rem]",
                    "border-solid border",
                    "text-dark-1 dark:text-light-1 placeholder:text-dark-1/[0.25] dark:placeholder:text-light-1/[0.25]",
                    "border-light-4/[.25] hover:border-purple-1"
                  )}
                  defaultValue={subtask.title}
                  data-id={subtask.isLocal ? "" : subtask.id}
                />
                <button
                  type="button"
                  data-id={subtask.id}
                  className="hover:text-purple-1"
                  onClick={handleDeleteSubtaskClick}
                >
                  <Cross className="fill-current" />
                </button>
              </li>
            ))}
            <div className="flex w-full h-[2.5rem]">
              <button
                type="button"
                className={clsx(
                  "flex-auto flex justify-center items-center text-purple-1 text-[0.8125rem] font-bold leading-[1.4375rem] rounded-[1.25rem]",
                  "bg-purple-1/[.1] dark:bg-light-1 hover:bg-purple-1/[.25] dark:hover:bg-light-1 focus:bg-purple-1/[.25] dark:focus:bg-light-1"
                )}
                onClick={handleAddSubtaskClick}
              >
                + Add New Subtask
              </button>
            </div>
          </ul>
        </section>
        <section className="flex flex-col">
          <label className="flex flex-col">
            <span
              className={clsx(
                "mb-[.5rem] text-[.75rem] font-bold leading-[.9375rem]",
                "text-light-4 dark:text-light-1"
              )}
            >
              Column
            </span>
            <select name="column">
              {columns.map((column) => (
                <option key={column.id} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>
          </label>
        </section>
        <section>
          <div className="flex w-full h-[2.5rem]">
            <button
              type="submit"
              className={clsx(
                "flex-auto flex justify-center items-center rounded-[1.25rem]",
                "text-light-1 text-[0.8125rem] font-bold leading-[1.4375rem]",
                "bg-purple-1 hover:bg-purple-2 focus:bg-purple-2"
              )}
            >
              {submitButton}
            </button>
          </div>
        </section>
      </article>
    </form>
  );
}

export default FormTask;
