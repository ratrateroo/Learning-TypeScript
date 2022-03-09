import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Todo } from '../model';

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
	return (
		<ListItem
			secondaryAction={
				<>
					<IconButton edge="end" aria-label="delete">
						<EditOutlinedIcon />
					</IconButton>
					<IconButton edge="end" aria-label="delete">
						<DeleteOutlinedIcon />
					</IconButton>
					<IconButton edge="end" aria-label="delete">
						<CheckCircleOutlineOutlinedIcon />
					</IconButton>
				</>
			}>
			SingleTodo
		</ListItem>
	);
};

export default SingleTodo;
