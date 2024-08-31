import TaskState from "./task-state-enum";

type TaskStateType =
  | TaskState.ToDo
  | TaskState.Doing
  | TaskState.Done;

export default TaskStateType
