import { gql } from "graphql-request";
import client from "@/app/api/client";

type TDeleteMutationVariables = {
  id: string;
};

interface IDeleteMutationResult {
  delete: {
    id: string;
    title: string;
  };
}

const DeleteTaskMutation = gql`
  mutation DeleteTask($id: uuid!) {
    delete: delete_tasks_by_pk(id: $id) {
      id
      title
    }
  }
`;

export type TResult = {
  id: string;
  title: string;
};

async function deleteTask(id: string) {
  const variables: TDeleteMutationVariables = { id };

  const data = await client.request<
    IDeleteMutationResult,
    TDeleteMutationVariables
  >(DeleteTaskMutation, variables);

  const result: TResult = data.delete;

  return result;
}

export default deleteTask;
