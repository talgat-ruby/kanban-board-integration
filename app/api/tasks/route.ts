import { NextResponse } from "next/server";
import addTask, { IBody as IAddTaskMutationBody } from "./addTask";

export async function POST(nextRequest: Request) {
  try {
    const body: IAddTaskMutationBody = await nextRequest.json();
    const board = await addTask(body);

    return NextResponse.json(board);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
