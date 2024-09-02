import React from "react";
import { Modal } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

interface TaskModalProps {
  modalTitle: string;
  isModalOpen: boolean;
  isLoading?: boolean;
  error: string;
  children: React.ReactNode;
  handleSubmit: () => void;
  handleClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  modalTitle,
  isModalOpen,
  error,
  children,
  handleSubmit,
  handleClose,
}: TaskModalProps) => (
  <Modal
    title={modalTitle}
    open={isModalOpen}
    onOk={handleSubmit}
    onCancel={handleClose}
    okText="save"
    cancelText="cancel"
  >
    {children}
    {error ? <div>
      <CloseCircleFilled />
      {error}
    </div>: null}
  </Modal>
);

export default TaskModal;
