import { gql, request } from "graphql-request";
import { NextResponse } from "next/server";
import { IBoard } from "@/types/boards";

const headers = new Headers();
headers.set(
  "x-hasura-admin-secret",
  process.env.HASURA_GRAPHQL_ADMIN_SECRET || ""
);

const query = gql`
  query GetBoards {
    boards {
      id
      name
    }
  }
`;

export async function GET(nextRequest: Request) {
  try {
    const data: { boards: IBoard[] } = await request({
      url: process.env.HASURA_URL || "",
      document: query,
      requestHeaders: headers,
    });

    return NextResponse.json(data.boards);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
