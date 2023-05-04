import { gql } from "graphql-request";
import client from "@/app/api/client";

type TDeleteMutationVariables = {
  id: string;
};

interface IDeleteMutationResult {
  delete: {
    id: string;
    name: string;
  };
}

const DeleteBoardMutation = gql`
  mutation DeleteBoard($id: uuid!) {
    delete: delete_boards_by_pk(id: $id) {
      id
      name
    }
  }
`;

export type TResult = {
  id: string;
  name: string;
};

async function deleteBoard(id: string) {
  const variables: TDeleteMutationVariables = { id };

  const data = await client.request<
    IDeleteMutationResult,
    TDeleteMutationVariables
  >(DeleteBoardMutation, variables);

  const result: TResult = data.delete;

  return result;
}

export default deleteBoard;
