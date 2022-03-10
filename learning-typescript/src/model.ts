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
	payload: { id: number; todo: string; isDone: boolean };
}

type ACTIONTYPE =
	| { type: 'EDIT'; payload: { id: number; editTodo: string } }
	| { type: 'DELETE'; payload: { id: number; editTodo: string } }
	| { type: 'DONE'; payload: { id: number; editTodo: string } };

export interface TodoState {
	todos: Todo[];
}
export const todoReducer = (state: TodoState, action: TodoAction) => {
	const { type, payload } = action;
	switch (type) {
		case TodoActionKind.EDIT:
			state.todos.map((todo) => {
				todo.id === payload.id ? { ...todo, todo: payload.todo } : todo;
			});

			return {
				...state,
				// state.todos.map((todo) =>
				// 	todo.id === payload.id ? { ...todo, todo: editTodo } : todo
				// )
			};
		case TodoActionKind.DELETE:
			state.todos.filter((todo) => todo.id !== payload.id);

			return {
				...state,
				// state.todos.map((todo) =>
				// 	todo.id === payload.id ? { ...todo, todo: editTodo } : todo
				// )
			};
		case TodoActionKind.DONE:
			state.todos.map((todo) =>
				todo.id === payload.id
					? {
							...todo,
							isDone: !todo.isDone,
					  }
					: todo
			);

			return {
				...state,
				// state.todos.map((todo) =>
				// 	todo.id === payload.id ? { ...todo, todo: editTodo } : todo
				// )
			};
	}
};
