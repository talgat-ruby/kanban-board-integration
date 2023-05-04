import { gql } from "graphql-request";
import client from "@/app/api/client";

type TAggrQueryVariables = {
  column_id: string;
};

interface IAggrQueryResult {
  aggr: {
    aggregate: {
      count: number;
    };
  };
}

const GetTasksCountQuery = gql`
  query GetTasksCount($column_id: uuid!) {
    aggr: tasks_aggregate(where: { column_id: { _eq: $column_id } }) {
      aggregate {
        count
      }
    }
  }
`;

interface ISubtaskVariables {
  title: string;
  position: number;
}

type TInsertMutationVariables = {
  title: string;
  description: string;
  position: number;
  column_id: string;
  subtasks: ISubtaskVariables[];
};

interface IInsertMutationResult {
  insert: {
    id: string;
    title: string;
  };
}

const InsertTaskMutation = gql`
  mutation InsertTask(
    $title: String!
    $description: String
    $position: Int!
    $column_id: uuid!
    $subtasks: [subtasks_insert_input!]!
  ) {
    insert: insert_tasks_one(
      object: {
        title: $title
        description: $description
        position: $position
        column_id: $column_id
        subtasks: { data: $subtasks }
      }
    ) {
      id
      title
    }
  }
`;

interface ISubtask {
  title: string;
}

export interface IBody {
  title: string;
  description: string;
  columnId: string;
  subtasks: ISubtask[];
}

export type TResult = {
  id: string;
  title: string;
};

async function getTasksCount(columnId: string) {
  const variables: TAggrQueryVariables = {
    column_id: columnId,
  };

  const data = await client.request<IAggrQueryResult, TAggrQueryVariables>(
    GetTasksCountQuery,
    variables
  );

  return data.aggr.aggregate.count;
}

async function addNewTask(body: IBody, position: number) {
  const subtasks: ISubtaskVariables[] = body.subtasks.map((subtask, i) => ({
    ...subtask,
    position: i,
  }));

  const variables: TInsertMutationVariables = {
    title: body.title,
    description: body.description,
    position,
    column_id: body.columnId,
    subtasks,
  };

  const data = await client.request<
    IInsertMutationResult,
    TInsertMutationVariables
  >(InsertTaskMutation, variables);

  return data.insert;
}

async function addTask(body: IBody) {
  const tasksCount = await getTasksCount(body.columnId);
  const result: TResult = await addNewTask(body, tasksCount);

  return result;
}

export default addTask;
