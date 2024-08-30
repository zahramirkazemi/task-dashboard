import Todo from "../type/todo";

export async function fetchTaskList(): Promise<Array<Todo>> {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todoList = await response.json();
	return todoList;
}

export async function updateTask(id: number, checked: boolean): Promise<Todo> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({
			completed: checked,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	const updatedTodo = await response.json();
	return updatedTodo;	
}