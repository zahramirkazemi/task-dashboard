import TaskState from "./task-state-enum";

interface Task {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  state: TaskState;
}

export default Task;