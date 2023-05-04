import { gql } from "graphql-request";
import client from "@/app/api/client";

interface IBoard {
  id: string;
  name: string;
}

interface IListQueryResult {
  list: IBoard[];
}

const GetBoardsQuery = gql`
  query GetBoards {
    list: boards {
      id
      name
    }
  }
`;

export type TResult = IBoard[];

async function fetchBoards() {
  const data = await client.request<IListQueryResult>(GetBoardsQuery);

  const result: TResult = data.list;

  return result;
}

export default fetchBoards;
