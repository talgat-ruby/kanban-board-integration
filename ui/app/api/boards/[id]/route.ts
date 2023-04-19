import { gql, request } from "graphql-request";
import { NextResponse } from "next/server";
import { IBoardWithColumnsWithTasksWithSubtasksAggr } from "@/types/boards";

const headers = new Headers();
headers.set(
  "x-hasura-admin-secret",
  process.env.HASURA_GRAPHQL_ADMIN_SECRET || ""
);

const query = gql`
  query GetBoard($id: uuid!) {
    board: boards_by_pk(id: $id) {
      id
      name
      columns {
        id
        name
        tasks {
          id
          description
          title
          all_subtasks: subtasks_aggregate {
            aggregate {
              count
            }
          }
          done_subtasks: subtasks_aggregate(
            where: { is_completed: { _eq: true } }
          ) {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
`;

interface IProps {
  params: {
    id: string;
  };
}

export async function GET(nextRequest: Request, { params }: IProps) {
  try {
    const data: { board: IBoardWithColumnsWithTasksWithSubtasksAggr } =
      await request({
        url: process.env.HASURA_URL || "",
        document: query,
        variables: { id: params.id },
        requestHeaders: headers,
      });

    return NextResponse.json(data.board);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

const updateMutation = gql`
  mutation UpdateBoard($id: uuid!, $object: boards_set_input) {
    update: update_boards_by_pk(_set: $object, pk_columns: { id: $id }) {
      id
    }
  }
`;

interface IPatchBody {
  name: string;
}

type TUpdateMutationVariable = {
  id: string;
  object: {
    name: string;
  };
};

export async function PATCH(nextRequest: Request, { params }: IProps) {
  try {
    const body: IPatchBody = await nextRequest.json();

    const variables = { id: params.id, object: { name: body.name } };

    const data = await request<
      { update: { id: string } },
      TUpdateMutationVariable
    >({
      url: process.env.HASURA_URL || "",
      document: updateMutation,
      variables,
      requestHeaders: headers,
    });

    return NextResponse.json(data.update);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}

const deleteMutation = gql`
  mutation DeleteBoard($id: uuid!) {
    delete: delete_boards_by_pk(id: $id) {
      id
      name
    }
  }
`;

type TDeleteMutationVariable = {
  id: string;
};

export async function DELETE(nextRequest: Request, { params }: IProps) {
  try {
    const variables = { id: params.id };

    const data = await request<
      { delete: { id: string; name: string } },
      TDeleteMutationVariable
    >({
      url: process.env.HASURA_URL || "",
      document: deleteMutation,
      variables,
      requestHeaders: headers,
    });

    return NextResponse.json(data.delete);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }
}
