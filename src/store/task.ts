import { create } from "zustand";
import { fetchTaskList, deleteTask, editTask, createTask } from "../api";
import { Task, TaskState, TaskStore } from "../type";

const useTaskStore = create<TaskStore>()((set) => ({
  taskList: [],
  allTasks: [],
  isLoading: false,
  newTaskError: "",
  editTaskError: "",
  fetchTaskList: async () => {
    set((state) => ({ ...state, isLoading: true, taskList: [] }));
    try {
      const RawTaskList = await fetchTaskList();
      const taskList = RawTaskList.map((task) => ({
        ...task,
        state: task.completed
          ? TaskState.Done
          : Math.random() > 0.5
          ? TaskState.Doing
          : TaskState.ToDo,
      }));
      set((state) => ({ ...state, taskList, allTasks: taskList }));
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  updateTask: (id: number, taskState: TaskState) => {
    set((state) => ({
      ...state,
      taskList: state.taskList.map((task) =>
        task.id === id ? { ...task, state: taskState } : task
      ),
      allTasks: state.allTasks.map((task) =>
        task.id === id ? { ...task, state: taskState } : task
      ),
    }));
  },
  createTask: async (title: string) => {
    const createdTask = await createTask(title);
    try {
      set((state) => ({
        ...state,
        taskList: [createdTask,...state.taskList, ],
        allTasks: [createdTask, ...state.allTasks],
      }));
    } catch {
      set((state) => ({
        ...state,
        newTaskError: "there is an error for creating new task.",
      }));
    }
  },
  editTask: async (id: number, title: string) => {
    const editedTask = await editTask(id, title);
    try {
      set((state) => ({
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === editedTask.id
            ? { ...task, title: editedTask.title }
            : task
        ),
        allTasks: state.allTasks.map((task) =>
          task.id === editedTask.id
            ? { ...task, title: editedTask.title }
            : task
        ),
      }));
    } catch {
      set((state) => ({
        ...state,
        editTaskError: "there is an error in editing task.",
      }));
    }
  },
  deleteTask: async (id: number) => {
    deleteTask(id);
    set((state) => ({
      ...state,
      taskList: state.taskList.filter((task) => task.id !== id),
      allTasks: state.allTasks.filter((task) => task.id !== id),
    }));
  },
  searchTask: (query: string) => {
    set((state) => ({
      ...state,
      taskList: state.allTasks.filter((task) => task.title.includes(query)),
    }));
  },
  clearErrors: () =>
    set((state) => ({ ...state, newTaskError: "", editTaskError: "" })),
}));

export default useTaskStore;
