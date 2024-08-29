import { create } from 'zustand';
import { fetchTodoList } from '../api';
import { TodoStore } from '../type';

const useTodoStore = create<TodoStore>()((set) => ({
	todoList: [],
	isLoading: false,
	fetchTodoList: async () => {
		set(state => ({ ...state, isLoading: true, todoList: [] }));
		try {
			const todoList = await fetchTodoList();
			set(state => ({ ...state, todoList }));
		} finally {
			set(state => ({ ...state, isLoading: false, }));
		}
	}
}))

export default useTodoStore;