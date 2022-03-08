import React, { FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	addTaskHandler: (e: FormEvent) => void;
	clearInputHandler: (e: FormEvent) => void;
}

const InpurField: React.FC<Props> = ({
	todo,
	setTodo,
	addTaskHandler,
	clearInputHandler,
}) => {
	return (
		<Paper
			component="form"
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: 400,
			}}>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Enter a task"
				inputProps={{ 'aria-label': 'type a task' }}
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<IconButton
				type="submit"
				sx={{ p: '10px' }}
				aria-label="search"
				onClick={addTaskHandler}>
				<BorderColorOutlinedIcon />
			</IconButton>
			<Divider />
			<IconButton
				sx={{ p: '10px' }}
				aria-label="search"
				onClick={clearInputHandler}>
				<HighlightOffOutlinedIcon />
			</IconButton>
		</Paper>
	);
};

export default InpurField;
