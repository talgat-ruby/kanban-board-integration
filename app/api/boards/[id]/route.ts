import { NextResponse } from "next/server";
import fetchBoard, { TResult as TFetchBoardResult } from "./fetchBoard";
import updateBoard, {
  IBody as IUpdateBoardBody,
  TResult as TUpdateBoardResult,
} from "./updateBoard";
import deleteTask, { TResult as TDeleteBoardResult } from "./deleteBoard";

interface IContext {
  params: {
    id: string;
  };
}

export async function GET(nextRequest: Request, { params }: IContext) {
  try {
    const board: TFetchBoardResult = await fetchBoard(params.id);
    return NextResponse.json(board);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

export async function PUT(nextRequest: Request, { params }: IContext) {
  try {
    const body: IUpdateBoardBody = await nextRequest.json();
    const updated: TUpdateBoardResult = await updateBoard(params.id, body);

    return NextResponse.json(updated);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

export async function DELETE(nextRequest: Request, { params }: IContext) {
  try {
    const deleted: TDeleteBoardResult = await deleteTask(params.id);
    return NextResponse.json(deleted);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
