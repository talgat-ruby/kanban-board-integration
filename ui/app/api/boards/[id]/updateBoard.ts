import { gql } from "graphql-request";
import client from "@/app/api/client";

interface IColumnVariables {
  id?: string;
  board_id: string;
  name: string;
  position: number;
}

interface IBoardVariables {
  name: string;
}

type TUpdateMutationVariables = {
  id: string;
  board: IBoardVariables;
  columns_id: string[];
  columns: IColumnVariables[];
};

interface IUpdateMutationResult {
  delete_columns: {
    affected_rows: number;
  };
  insert_columns: {
    affected_rows: number;
  };
  update: {
    id: string;
    name: string;
  };
}

const UpdateBoardMutation = gql`
  mutation UpdateBoard(
    $id: uuid!
    $board: boards_set_input
    $columns_id: [uuid!]
    $columns: [columns_insert_input!]!
  ) {
    delete_columns(
      where: {
        _and: [{ board_id: { _eq: $id } }, { id: { _nin: $columns_id } }]
      }
    ) {
      affected_rows
    }
    insert_columns(
      objects: $columns
      on_conflict: {
        constraint: columns_pkey
        update_columns: [name, position]
      }
    ) {
      affected_rows
    }
    update: update_boards_by_pk(pk_columns: { id: $id }, _set: $board) {
      id
      name
    }
  }
`;

interface IColumn {
  id?: string;
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

async function updateBoard(id: string, body: IBody) {
  const board: IBoardVariables = { name: body.name };
  const columns: IColumnVariables[] = body.columns.map((column, index) => ({
    id: column.id,
    name: column.name,
    board_id: id,
    position: index,
  }));
  const columnsId: string[] = columns
    .map(({ id }) => id)
    .filter((id: string | undefined): id is string => !!id);

  const variables: TUpdateMutationVariables = {
    id,
    board,
    columns,
    columns_id: columnsId,
  };

  const data = await client.request<
    IUpdateMutationResult,
    TUpdateMutationVariables
  >(UpdateBoardMutation, variables);

  const result: TResult = data.update;

  return result;
}

export default updateBoard;
