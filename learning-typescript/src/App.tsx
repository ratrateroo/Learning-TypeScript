import React, { Fragment, useState, FormEvent } from 'react';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);
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
		</Fragment>
	);
};

export default App;
