import { useAppSelector } from '../store/hooks';

const ItemList = (): JSX.Element => {
	const items = useAppSelector(state => state.items);
	console.log(items);
	return <div>ItemListContainer</div>;
};

export default ItemList;
