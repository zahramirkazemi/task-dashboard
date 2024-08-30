import Task from "../type/task";

export async function fetchTaskList(): Promise<Array<Task>> {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const taskList = await response.json();
	return taskList;
}

export async function updateTask(id: number, checked: boolean): Promise<Task> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({
			completed: checked,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	const updatedTask = await response.json();
	return updatedTask;	
}