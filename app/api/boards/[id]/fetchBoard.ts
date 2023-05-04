import { gql } from "graphql-request";
import client from "@/app/api/client";

interface ISubtasksAggr {
  aggregate: {
    count: number;
  };
}

interface ISubtask {
  id: string;
  title: string;
}

interface ITasks {
  id: string;
  description: string;
  title: string;
  subtasks: ISubtask[];
  allSubtasks: ISubtasksAggr;
  doneSubtasks: ISubtasksAggr;
}

interface IColumn {
  id: string;
  name: string;
  tasks: ITasks[];
}

type TQueryItemVariables = {
  id: string;
};

interface IQueryItemResult {
  item: {
    id: string;
    name: string;
    columns: IColumn[];
  };
}

const GetBoardQuery = gql`
  query GetBoard($id: uuid!) {
    item: boards_by_pk(id: $id) {
      id
      name
      columns(order_by: { position: asc }) {
        id
        name
        tasks(order_by: { position: desc }) {
          id
          description
          title
          subtasks {
            id
            title
          }
          allSubtasks: subtasks_aggregate {
            aggregate {
              count
            }
          }
          doneSubtasks: subtasks_aggregate(
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

export type TResult = {
  id: string;
  name: string;
  columns: IColumn[];
};

async function fetchBoard(id: string) {
  const variables: TQueryItemVariables = { id };

  const data = await client.request<IQueryItemResult, TQueryItemVariables>(
    GetBoardQuery,
    variables
  );

  const result: TResult = data.item;

  return result;
}

export default fetchBoard;
