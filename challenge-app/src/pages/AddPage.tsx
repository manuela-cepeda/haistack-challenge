import { Typography, Box, Stack } from '@mui/material';
import AddForm from '../components/AddForm';

const AddPage = (): JSX.Element => {
	return (
		<>
			<Box sx={{ my: 4 }}>
				<Stack direction='row' spacing={2} sx={{ my: 4 }}>
					<Typography variant='h4' component='h1' gutterBottom>
						Add Item
					</Typography>
				</Stack>
				<AddForm />
			</Box>
		</>
	);
};

export default AddPage;
