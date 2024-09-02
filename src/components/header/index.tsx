import { useEffect, useState } from "react";
import { Button, Flex, Input } from "antd";
import ThemeButton from "./theme-button";
import LiveSearch from "./search";
import TaskModal from "../task-board/task-modal";
import useTaskStore from "../../store/task";

const Header: React.FC = () => {
  const { newTaskError, createTask, clearErrors} =
    useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const handleModalOpen = (): void => setOpenCreateTask(true);
  const handleClose = (): void => {
    setOpenCreateTask(false);
    clearErrors();
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNewTaskTitle(event.target.value)
  const handleSubmit = (): void => {
    createTask(newTaskTitle);
    handleClose();
    setNewTaskTitle('');
  }

  return (
    <>
      <Flex justify="space-between">
        <LiveSearch />
        <ThemeButton />
        <Button type="primary" onClick={handleModalOpen}>
          Create Task
        </Button>
      </Flex>
      <TaskModal
        modalTitle="Create Task"
        isModalOpen={openCreateTask}
        error={newTaskError}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      >
        <Input placeholder="Task Title" value={newTaskTitle} onChange={handleInputChange}/>
      </TaskModal>
    </>
  );
};

export default Header;
