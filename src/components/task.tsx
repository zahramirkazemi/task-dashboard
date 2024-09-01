import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";

interface TaskCardProps {
  taskTitle: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ taskTitle }: TaskCardProps) => {
  const actions: React.ReactNode[] = [<EditOutlined key="edit" />];

  return (
    <Card actions={actions} size="small" className="task-card">
      {taskTitle}
    </Card>
  );
};

export default TaskCard;
