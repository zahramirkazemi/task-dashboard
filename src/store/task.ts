import { create } from "zustand";
import { updateTask, fetchTaskList } from "../api";
import { TaskStore } from "../type";

const useTaskStore = create<TaskStore>()((set) => ({
  taskList: [],
  allTasks: [],
  isLoading: false,
  fetchTaskList: async () => {
    set((state) => ({ ...state, isLoading: true, taskList: [] }));
    try {
      const taskList = await fetchTaskList();
      set((state) => ({ ...state, taskList, allTasks: taskList }));
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
      allTasks: state.allTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, completed: updatedTask.completed} : task
      ),
    }));
  },
  searchTask: (query: string) => {
    set((state) => ({
      ...state,
      taskList: state.allTasks.filter((task) => task.title.includes(query)),
    }));
  }
}));

export default useTaskStore;
