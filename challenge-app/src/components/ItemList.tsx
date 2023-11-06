import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Paper } from '@mui/material';
import {
	DataGrid,
	type GridColDef,
	GridActionsCellItem,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { type Item } from '../store/features/itemsSlice';
import { deleteItem } from '../store/thunks';

const ItemList = (): JSX.Element => {
	const navigate = useNavigate();
	const items: Item[] = useAppSelector(state => state.items.items);
	const dispatch = useAppDispatch();

	const columns: GridColDef[] = [
		{ field: 'name', headerName: 'Name', width: 300 },
		{ field: 'description', headerName: 'Description', width: 600 },
		{
			field: 'actions',
			type: 'actions',
			width: 200,
			headerName: 'Actions',
			cellClassName: 'actions',
			getActions: ({ id }) => {
				return [
					<GridActionsCellItem
						key={id}
						icon={<EditIcon />}
						label='Edit'
						className='textPrimary'
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
						color='inherit'
					/>,
					<GridActionsCellItem
						key={id}
						icon={<DeleteIcon />}
						label='Delete'
						onClick={() => {
							void dispatch(deleteItem(id));
						}}
						color='inherit'
					/>,
				];
			},
		},
	];

	return (
		<Paper sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={items}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
			/>
		</Paper>
	);
};

export default ItemList;
