import { TaskState } from "../type";
import Task from "../type/task";

export async function fetchTaskList(): Promise<Array<Task>> {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const taskList = await response.json();
	return taskList;
}

export async function editTask(id: number, taskTitle: string): Promise<Task> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({
			title: taskTitle,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	const updatedTask = await response.json();
	return updatedTask;	
}

export async function createTask(title: string): Promise<Task> {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
		method: 'POST',
		body: JSON.stringify({
			userId: 1,
			title,
			completed: false,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	const createdTask = await response.json();
	return { ...createdTask, state: TaskState.ToDo};	
}

export async function deleteTask(id: number): Promise<Task> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		method: 'DELETE',
	});
	const deletedTask = await response.json();
	return deletedTask;	
}