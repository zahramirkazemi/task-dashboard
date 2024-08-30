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
    const task = await updateTask(id, checked);
    set((state) => ({
      ...state,
      taskList: state.taskList.map((task) =>
        task.id === id ? { ...task, completed: checked } : task
      ),
    }));
  },
}));

export default useTaskStore;
