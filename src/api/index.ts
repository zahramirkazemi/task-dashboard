import Todo from "../type/todo";

export async function fetchTodoList(): Promise<Array<Todo>> {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todoList = await response.json();
	return todoList;
}