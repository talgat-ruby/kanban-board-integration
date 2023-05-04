import { gql } from "graphql-request";
import client from "@/app/api/client";

interface ISubtaskVariables {
  id?: string;
  task_id: string;
  title: string;
  position: number;
}

interface ITaskVariables {
  title: string;
  description: string;
  column_id: string;
}

type TUpdateMutationVariables = {
  id: string;
  task: ITaskVariables;
  subtasks_id: string[];
  subtasks: ISubtaskVariables[];
};

interface IUpdateMutationResult {
  deleteSubtasks: {
    affected_rows: number;
  };
  insertSubtasks: {
    affected_rows: number;
  };
  update: {
    id: string;
    title: string;
  };
}

const UpdateTaskMutation = gql`
  mutation UpdateTask(
    $id: uuid!
    $task: tasks_set_input
    $subtasks_id: [uuid!]
    $subtasks: [subtasks_insert_input!]!
  ) {
    deleteSubtasks: delete_subtasks(
      where: {
        _and: [{ task_id: { _eq: $id } }, { id: { _nin: $subtasks_id } }]
      }
    ) {
      affected_rows
    }
    insertSubtasks: insert_subtasks(
      objects: $subtasks
      on_conflict: {
        constraint: subtasks_pkey
        update_columns: [title, position]
      }
    ) {
      affected_rows
    }
    update: update_tasks_by_pk(pk_columns: { id: $id }, _set: $task) {
      id
      title
    }
  }
`;

interface ISubtask {
  id?: string;
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

async function updateTask(id: string, body: IBody) {
  const task: ITaskVariables = {
    title: body.title,
    description: body.description,
    column_id: body.columnId,
  };
  const subtasks: ISubtaskVariables[] = body.subtasks.map((subtask, i) => ({
    id: subtask.id,
    title: subtask.title,
    task_id: id,
    position: i,
  }));
  const subtasksId: string[] = subtasks
    .map(({ id }) => id)
    .filter((id: string | undefined): id is string => !!id);

  const variables: TUpdateMutationVariables = {
    id,
    task,
    subtasks,
    subtasks_id: subtasksId,
  };

  const data = await client.request<
    IUpdateMutationResult,
    TUpdateMutationVariables
  >(UpdateTaskMutation, variables);

  const result: TResult = data.update;

  return result;
}

export default updateTask;
