import { gql } from "graphql-request";
import client from "@/app/api/client";

interface ISubtaskVariables {
  id: string;
  title: string;
  isCompleted: boolean;
}

type TGetTaskQueryVariables = {
  id: string;
};

interface IGetTaskQueryResult {
  task: {
    id: string;
    title: string;
    description: string;
    subtasks: ISubtaskVariables[];
  };
}

const GetTaskQuery = gql`
  query GetTask($id: uuid!) {
    task: tasks_by_pk(id: $id) {
      id
      title
      description
      subtasks(order_by: { position: asc }) {
        id
        title
        isCompleted: is_completed
      }
    }
  }
`;

interface ISubtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type TResult = {
  id: string;
  title: string;
  description: string;
  subtasks: ISubtask[];
};

async function fetchTask(id: string) {
  const variables: TGetTaskQueryVariables = { id };

  const data = await client.request<
    IGetTaskQueryResult,
    TGetTaskQueryVariables
  >(GetTaskQuery, variables);

  const result: TResult = data.task;

  return result;
}

export default fetchTask;
