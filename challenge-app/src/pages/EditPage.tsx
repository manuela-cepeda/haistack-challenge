import { Typography, Box, Stack } from '@mui/material';
import EditForm from '../components/EditForm';

const EditPage = (): JSX.Element => {
	return (
		<>
			<Box sx={{ my: 4 }}>
				<Stack direction='row' spacing={2} sx={{ my: 4 }}>
					<Typography variant='h4' component='h1' gutterBottom>
						Edit Item
					</Typography>
				</Stack>
				<EditForm />
			</Box>
		</>
	);
};

export default EditPage;
