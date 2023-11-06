import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Paper, Stack } from '@mui/material';
import { updateItem } from '../store/thunks';
import { resetStatus } from '../store/features/itemsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Notification from './Notification';

const EditForm = (): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const items: any = useAppSelector(state => state.items.items);
	let item;
	if (id !== undefined) {
		item = items.find((item: any) => item.id === parseInt(id));
	}

	const initialFormValues = {
		name: item.name,
		description: item.description,
	};
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const { name, description } = formValues;
		void dispatch(updateItem({ name, description, id }));
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
						label='New Name'
						name='name'
						fullWidth
						value={formValues.name}
						onChange={handleOnChange}
						required
					/>

					<TextField
						label='New Description'
						name='description'
						fullWidth
						value={formValues.description}
						onChange={handleOnChange}
						required
					/>

					<Stack spacing={2} width={200} direction='row'>
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

export default EditForm;
