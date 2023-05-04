import { gql } from "graphql-request";
import client from "@/app/api/client";

interface IColumnVariables {
  name: string;
  position: number;
}

type TInsertMutationVariables = {
  name: string;
  columns: IColumnVariables[];
};

interface IInsertMutationResult {
  insert: {
    id: string;
    name: string;
  };
}

const InsertBoardMutation = gql`
  mutation InsertBoard($name: String!, $columns: [columns_insert_input!]!) {
    insert: insert_boards_one(
      object: { name: $name, columns: { data: $columns } }
    ) {
      id
      name
    }
  }
`;

interface IColumn {
  name: string;
}

export interface IBody {
  name: string;
  columns: IColumn[];
}

export type TResult = {
  id: string;
  name: string;
};

async function addBoard(body: IBody) {
  const columns = body.columns.map((columnData, i) => ({
    ...columnData,
    position: i,
  }));

  const variables: TInsertMutationVariables = {
    name: body.name,
    columns,
  };

  const data = await client.request<
    IInsertMutationResult,
    TInsertMutationVariables
  >(InsertBoardMutation, variables);

  const result: TResult = {
    id: data.insert.id,
    name: data.insert.name,
  };

  return result;
}

export default addBoard;
