import { NextResponse } from "next/server";
import fetchTask, { TResult as TFetchTaskResult } from "./fetchTask";
import updateTask, {
  IBody as IUpdateBoardBody,
  TResult as TUpdateTaskResult,
} from "./updateTask";
import deleteTask, { TResult as TDeleteTaskResult } from "./deleteTask";

interface IContext {
  params: {
    id: string;
  };
}

export async function GET(nextRequest: Request, { params }: IContext) {
  try {
    const board: TFetchTaskResult = await fetchTask(params.id);
    return NextResponse.json(board);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

export async function PUT(nextRequest: Request, { params }: IContext) {
  try {
    const body: IUpdateBoardBody = await nextRequest.json();
    const updated: TUpdateTaskResult = await updateTask(params.id, body);

    return NextResponse.json(updated);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

export async function DELETE(nextRequest: Request, { params }: IContext) {
  try {
    const deleted: TDeleteTaskResult = await deleteTask(params.id);
    return NextResponse.json(deleted);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
