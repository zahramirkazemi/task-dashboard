import Task from "./task"
import TaskState from "./task-state-enum"

export type TaskStore = {
	taskList: Array<Task>,
	allTasks: Array<Task>,
	isLoading: boolean,
	newTaskError: string,
	editTaskError: string,
	fetchTaskList: () => Promise<void>,
	updateTask: (id: number, taskState: TaskState) => void,
	createTask: (title: string) => Promise<void>,
	editTask: (id: number, title: string) => Promise<void>,
	deleteTask: (id: number) => Promise<void>,
	searchTask: (query: string) => void,
	clearErrors: () => void,
}

export type TaskStoreSet =
	(partial:
		TaskStore |
		Partial<TaskStore> |
		((state: TaskStore) => TaskStore |
			Partial<TaskStore>),
		replace?:
			boolean | undefined) => void