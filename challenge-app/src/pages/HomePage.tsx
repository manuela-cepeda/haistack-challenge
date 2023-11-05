import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { getItems } from '../store/thunks';
import ItemList from '../components/ItemList';

const HomePage = (): JSX.Element => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<>
			<div>HomePage</div>
			<ItemList />
		</>
	);
};

export default HomePage;
