import React, { Fragment, useState, FormEvent } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, todo: 'Study', isDone: false },
		{ id: 2, todo: 'Eat', isDone: true },
	]);
	const addTaskHandler = (e: FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo('');
		}
	};

	const clearInputHandler = (e: FormEvent) => {
		e.preventDefault();
		setTodo('');
	};
	return (
		<Fragment>
			<InputField
				todo={todo}
				setTodo={setTodo}
				addTaskHandler={addTaskHandler}
				clearInputHandler={clearInputHandler}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</Fragment>
	);
};

export default App;
