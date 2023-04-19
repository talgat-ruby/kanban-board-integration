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

const addMutation = gql`
  mutation AddBoard($name: String!, $columns_data: [columns_insert_input!]!) {
    insert: insert_boards_one(
      object: { name: $name, columns: { data: $columns_data } }
    ) {
      id
    }
  }
`;

interface IColumnsData {
  name: string;
}

interface IPostBody {
  name: string;
  columnsData: IColumnsData[];
}

type TAddMutationVariable = {
  name: string;
  columns_data: IColumnsData[];
};

export async function POST(nextRequest: Request) {
  try {
    const body: IPostBody = await nextRequest.json();

    const variables = { name: body.name, columns_data: body.columnsData };

    const data = await request<
      { insert: { id: string } },
      TAddMutationVariable
    >({
      url: process.env.HASURA_URL || "",
      document: addMutation,
      variables,
      requestHeaders: headers,
    });

    return NextResponse.json(data.insert);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
