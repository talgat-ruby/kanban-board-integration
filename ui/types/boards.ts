export interface IBoard {
  id: string;
  name: string;
}

interface ISubtasksAggr {
  aggregate: {
    count: number;
  };
}

interface ITaskWithSubtasksAggr {
  id: string;
  title: string;
  description: string;
  all_subtasks: ISubtasksAggr;
  done_subtasks: ISubtasksAggr;
}

interface IColumnWithTasksWithSubtasksAggr {
  id: string;
  name: string;
  tasks: ITaskWithSubtasksAggr[];
}

export interface IBoardWithColumnsWithTasksWithSubtasksAggr {
  id: string;
  name: string;
  columns: IColumnWithTasksWithSubtasksAggr[];
}
