import { create } from "zustand";
import { updateTask, fetchTaskList } from "../api";
import { TaskStore } from "../type";

const useTaskStore = create<TaskStore>()((set) => ({
  taskList: [],
  isLoading: false,
  fetchTaskList: async () => {
    set((state) => ({ ...state, isLoading: true, taskList: [] }));
    try {
      const taskList = await fetchTaskList();
      set((state) => ({ ...state, taskList }));
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  updateTask: async (id: number, checked: boolean) => {
    const updatedTask = await updateTask(id, checked);
    set((state) => ({
      ...state,
      taskList: state.taskList.map((task) =>
        task.id === updatedTask.id ? { ...task, completed: updatedTask.completed} : task
      ),
    }));
  },
}));

export default useTaskStore;
