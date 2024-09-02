import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import useTaskStore from "../../store/task";
import TaskModal from "./task-modal";

interface TaskCardProps {
  taskId: number;
  taskTitle: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskTitle,
  taskId,
}: TaskCardProps) => {
  const { editTaskError, editTask, clearErrors, deleteTask } = useTaskStore();
  const [title, setTitle] = useState(taskTitle);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const handleModalOpen = (): void => setOpenTaskModal(true);
  const handleDeleteTask = (): Promise<void> => deleteTask(taskId);
  const handleClose = (): void => {
    setOpenTaskModal(false);
    clearErrors();
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setTitle(event.target.value);
  const handleSubmit = (): void => {
    editTask(taskId, title);
    handleClose();
  };
  const actions: React.ReactNode[] = [
    <EditOutlined onClick={handleModalOpen} key="edit" />,
    <DeleteOutlined onClick={handleDeleteTask} key="delete" />,
  ];

  return (
    <>
      <Card actions={actions} size="small" className="task-card">
        {taskTitle}
      </Card>
      <TaskModal
        modalTitle="Edit Task"
        isModalOpen={openTaskModal}
        error={editTaskError}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      >
        <Input
          placeholder="Task Title"
          value={title}
          onChange={handleInputChange}
        />
      </TaskModal>
    </>
  );
};

export default TaskCard;
