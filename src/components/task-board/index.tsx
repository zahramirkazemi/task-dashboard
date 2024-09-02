import { useState } from "react";
import { Flex } from "antd";
import {
  useSensors,
  useSensor,
  PointerSensor,
  DndContext,
  closestCorners,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimation,
} from "@dnd-kit/core";
import TaskList from "./task-list";
import { TaskState } from "../../type";
import useTaskStore from "../../store/task";
import TaskCard from "./task";

const TaskBoard: React.FC = () => {
  const { taskList, updateTask } = useTaskStore();
  const [activeTaskId, setActiveTaskId] = useState<null | number>(null);
  const sensors = useSensors(useSensor(PointerSensor));
  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };
  const task = activeTaskId
    ? taskList.find((task) => task.id === activeTaskId)
    : null;

  const handleDragEnd = ({ active, over }: DragEndEvent): void => {
    updateTask(Number(active.id), over?.id as TaskState)
    setActiveTaskId(null);
  };

  const handleDragStart = ({ active }: DragStartEvent): void =>
    setActiveTaskId(Number(active.id));

  return <DndContext
    sensors={sensors}
    collisionDetection={closestCorners}
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
  >
    <Flex gap="40px" align="start" justify="space-around">
      <TaskList
        listTitle={TaskState.ToDo}
        listItems={taskList.filter((task) => task.state === TaskState.ToDo)}
      />
      <TaskList
        listTitle={TaskState.Doing}
        listItems={taskList.filter((task) => task.state === TaskState.Doing)}
      />
      <TaskList
        listTitle={TaskState.Done}
        listItems={taskList.filter((task) => task.state === TaskState.Done)}
      />
    </Flex>
    <DragOverlay dropAnimation={dropAnimation}>
      {task ? <TaskCard taskId={task.id} taskTitle={task.title} grabbed /> : null}
    </DragOverlay>
  </DndContext>;
};

export default TaskBoard;
