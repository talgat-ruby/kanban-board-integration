"use client";

import { FormEvent, MouseEvent } from "react";
import clsx from "clsx";

interface IColumn {
  id: string;
  name: string;
  isLocal: boolean;
}

interface IProps {
  id: string;
  title: string;
  description: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: (event: MouseEvent<HTMLButtonElement>) => void;
}

function FormConfirmation({
  id,
  title,
  description,
  onSubmit,
  onCancel,
}: IProps) {
  return (
    <form
      data-id={id}
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
        <p>{description}</p>
      </article>
      <footer>
        <menu className="flex">
          <li className="flex w-full h-[2.5rem]">
            <button
              type="submit"
              className={clsx(
                "flex-auto flex justify-center items-center rounded-[1.25rem]",
                "text-light-1 text-[0.8125rem] font-bold leading-[1.4375rem]",
                "bg-red-1 hover:bg-red-2 focus:bg-red-2"
              )}
            >
              Delete
            </button>
          </li>
          <li className="flex w-full h-[2.5rem]">
            <button
              type="button"
              className={clsx(
                "flex-auto flex justify-center items-center rounded-[1.25rem]",
                "text-light-1 text-[0.8125rem] font-bold leading-[1.4375rem]",
                "bg-purple-1 hover:bg-purple-2 focus:bg-purple-2"
              )}
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
        </menu>
      </footer>
    </form>
  );
}

export default FormConfirmation;
