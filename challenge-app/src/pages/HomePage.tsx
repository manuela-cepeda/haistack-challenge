import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getItems } from '../store/thunks';
import ItemList from '../components/ItemList';
import { Fab, Typography, Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { type Item } from '../store/features/itemsSlice';

const HomePage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const items: Item[] = useAppSelector(state => state.items.items);

	useEffect(() => {
		// since i am using https://dummyjson.com/ to simulate fetch with fake JSON data, the adding and editing won´t be in the server, just in the store
		// getitems just if the state.items is empty
		if (items.length === 0) void dispatch(getItems());
	}, []);

	return (
		<>
			<Box sx={{ my: 4 }}>
				<Stack direction='row' spacing={2} sx={{ my: 4 }}>
					<Typography variant='h4' component='h1' gutterBottom>
						Items
					</Typography>
					<Fab color='primary' aria-label='add' size='small'>
						<AddIcon
							onClick={() => {
								navigate('/add');
							}}
						/>
					</Fab>
				</Stack>
				<ItemList />
			</Box>
		</>
	);
};

export default HomePage;
