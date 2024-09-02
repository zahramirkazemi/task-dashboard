import { Divider, List } from "antd";
import { useDroppable } from "@dnd-kit/core";
import useTaskStore from "../../store/task";
import { Task } from "../../type";
import TaskCard from "./task";

interface TaskListProps {
  listTitle: string;
  listItems: Task[];
}

const TaskList: React.FC<TaskListProps> = ({
  listTitle,
  listItems,
}: TaskListProps) => {
  const { isLoading } = useTaskStore();
  const { setNodeRef } = useDroppable({
    id: listTitle,
  });

  return (
    <div ref={setNodeRef} className="task-list-container">
      <Divider>{listTitle}</Divider>
      <List
        loading={isLoading}
        className="task-list"
        dataSource={listItems}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <TaskCard taskTitle={item.title} taskId={item.id}/>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskList;
