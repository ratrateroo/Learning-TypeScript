import React from 'react';
import { Todo } from '../model';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							ID: {todo.id} - Todo: {todo.todo} - Done:{' '}
							{todo.isDone ? 'True' : 'False'}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
