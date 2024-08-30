import Task from "./task"

export type TaskStore = {
	taskList: Array<Task>,
	isLoading: boolean,
	fetchTaskList: () => Promise<void>,
	updateTask: (id: number, checked: boolean) => Promise<void>,
}

export type TaskStoreSet =
	(partial:
		TaskStore |
		Partial<TaskStore> |
		((state: TaskStore) => TaskStore |
			Partial<TaskStore>),
		replace?:
			boolean | undefined) => void