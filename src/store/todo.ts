import { create } from "zustand";
import { updateTask, fetchTaskList } from "../api";
import { TodoStore } from "../type";

const useTodoStore = create<TodoStore>()((set) => ({
  todoList: [],
  isLoading: false,
  fetchTaskList: async () => {
    set((state) => ({ ...state, isLoading: true, todoList: [] }));
    try {
      const todoList = await fetchTaskList();
      set((state) => ({ ...state, todoList }));
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  updateTask: async (id: number, checked: boolean) => {
    const task = await updateTask(id, checked);
    set((state) => ({
      ...state,
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      ),
    }));
  },
}));

export default useTodoStore;
