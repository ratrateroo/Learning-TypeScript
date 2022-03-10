export interface Todo {
	id: number;
	todo: string;
	isDone: boolean;
}

export enum TodoActionKind {
	EDIT = 'EDIT',
	DELETE = 'DELETE',
	DONE = 'DONE',
}

export interface TodoAction {
	type: TodoActionKind;
	payload: number;
}

export interface TodoState {
	todos: Todo[];
}
