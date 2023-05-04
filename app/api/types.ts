export type {
  TResult as TAddBoardResult,
  IBody as IAddBoardBody,
} from "./boards/addBoard";
export type { TResult as TFetchBoardsResult } from "./boards/fetchBoards";
export type { TResult as TDeleteBoardResult } from "./boards/[id]/deleteBoard";
export type { TResult as TFetchBoardResult } from "./boards/[id]/fetchBoard";
export type {
  TResult as TUpdateBoardResult,
  IBody as IUpdateBoardBody,
} from "./boards/[id]/updateBoard";

export type {
  TResult as TAddTaskResult,
  IBody as IAddTaskBody,
} from "./tasks/addTask";
export type { TResult as TDeleteTaskResult } from "./tasks/[id]/deleteTask";
export type { TResult as TFetchTaskResult } from "./tasks/[id]/fetchTask";
export type {
  TResult as TUpdateTaskResult,
  IBody as IUpdateTaskBody,
} from "./tasks/[id]/updateTask";
