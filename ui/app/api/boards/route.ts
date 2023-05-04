import { NextResponse } from "next/server";
import fetchBoards, { TResult as TFetchBoardsResult } from "./fetchBoards";
import addBoard, {
  IBody as IAddBoardMutationBody,
  TResult as TAddBoardResult,
} from "./addBoard";

export async function GET() {
  try {
    const list: TFetchBoardsResult = await fetchBoards();
    return NextResponse.json(list);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

export async function POST(nextRequest: Request) {
  try {
    const body: IAddBoardMutationBody = await nextRequest.json();
    const board: TAddBoardResult = await addBoard(body);

    return NextResponse.json(board);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
