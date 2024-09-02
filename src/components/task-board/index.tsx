import { Flex } from "antd";
import TaskList from "./task-list";
import { TaskState } from "../../type";
import useTaskStore from "../../store/task";

const TaskBoard: React.FC = () => {
  const { taskList } = useTaskStore();

  return <Flex gap="40px" align="start" justify="space-around">
    <TaskList listTitle={TaskState.ToDo} listItems={taskList.filter(task => task.state === TaskState.ToDo)} />
    <TaskList listTitle={TaskState.Doing} listItems={taskList.filter(task => task.state === TaskState.Doing)} />
    <TaskList listTitle={TaskState.Done} listItems={taskList.filter(task => task.state === TaskState.Done)} />
  </Flex>;
}

export default TaskBoard;