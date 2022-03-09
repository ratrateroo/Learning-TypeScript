import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Input from '@mui/material/Input';
import { Todo } from '../model';
import TodoList from './TodoList';

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);
	const todoEditHandler = (isDone: boolean, id: number) => {
		!isDone && !edit
			? setEdit(!edit)
			: setTodos(
					todos.map((todo) =>
						todo.id === id ? { ...todo, todo: editTodo } : todo
					)
			  );
		setEdit(!edit);
	};
	const todoDoneHandler = (id: number) => {
		if (!edit) {
			setTodos(
				todos.map((todo) =>
					todo.id === id
						? {
								...todo,
								isDone: !todo.isDone,
						  }
						: todo
				)
			);
		}
	};

	const todoDeleteHandler = (id: number) => {
		if (!edit) {
			setTodos(todos.filter((todo) => todo.id !== id));
		}
	};

	const todoSubmitHandler = (e: React.KeyboardEvent, id: number) => {
		console.log(e.key);
		if (e.key === 'Enter') {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, todo: editTodo } : todo
				)
			);
			setEdit(!edit);
		}
	};
	return (
		<ListItem
			key={todo.id}
			secondaryAction={
				<>
					<IconButton
						edge="end"
						aria-label="edit"
						onClick={() => {
							todoEditHandler(todo.isDone, todo.id);
						}}>
						<EditOutlinedIcon />
					</IconButton>
					<IconButton
						edge="end"
						aria-label="delete"
						onClick={() => {
							todoDeleteHandler(todo.id);
						}}>
						<DeleteOutlinedIcon />
					</IconButton>
					<IconButton
						edge="end"
						aria-label="done"
						onClick={() => {
							todoDoneHandler(todo.id);
						}}>
						<CheckCircleOutlineOutlinedIcon />
					</IconButton>
				</>
			}>
			{edit ? (
				<Input
					value={editTodo}
					placeholder={todo.todo}
					onKeyPress={(e) => todoSubmitHandler(e, todo.id)}
					onChange={(e) => {
						setEditTodo(e.target.value);
					}}
				/>
			) : (
				<ListItemText
					primary={todo.todo}
					secondary={todo.isDone ? 'Done' : 'Not yet done'}
				/>
			)}
		</ListItem>
	);
};

export default SingleTodo;
