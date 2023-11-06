import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Stack } from '@mui/material';
import { addItem } from '../store/thunks';
import { resetStatus } from '../store/features/itemsSlice';
import { useAppDispatch } from '../store/hooks';
import Notification from './Notification';

const initialFormValues = {
	name: '',
	description: '',
};

const AddForm = (): JSX.Element => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		void dispatch(addItem(formValues));
		setFormValues(initialFormValues);
		setTimeout(() => {
			dispatch(resetStatus());
			navigate('/');
		}, 2000);
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<Paper sx={{ padding: '20px' }}>
			<form onSubmit={handleSubmit}>
				<Stack spacing={2}>
					<TextField
						label='Name'
						name='name'
						fullWidth
						value={formValues.name}
						onChange={handleOnChange}
						required
					/>

					<TextField
						label='Description'
						name='description'
						fullWidth
						value={formValues.description}
						onChange={handleOnChange}
						required
					/>

					<Stack spacing={2} direction='row' justifyContent='flex-end'>
						<Button type='submit' variant='contained'>
							Submit
						</Button>
						<Button
							variant='outlined'
							onClick={() => {
								navigate('/');
							}}
						>
							Cancel
						</Button>
					</Stack>
				</Stack>
			</form>
			<Notification />
		</Paper>
	);
};

export default AddForm;
