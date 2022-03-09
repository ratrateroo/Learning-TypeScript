import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import List from '@mui/material/List';
interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
	return (
		<div>
			<List>
				{todos.map((todo) => {
					return (
						<>
							<SingleTodo
								todo={todo}
								key={todo.id}
								todos={todos}
								setTodos={setTodos}
							/>
						</>
					);
				})}
			</List>
		</div>
	);
};

export default TodoList;
