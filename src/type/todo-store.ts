import Todo from "./todo"

export type TodoStore = {
	todoList: Array<Todo>,
	isLoading: boolean,
	fetchTodoList: () => Promise<void>,
}

export type TodoStoreSet =
	(partial:
		TodoStore |
		Partial<TodoStore> |
		((state: TodoStore) => TodoStore |
			Partial<TodoStore>),
		replace?:
			boolean | undefined) => void