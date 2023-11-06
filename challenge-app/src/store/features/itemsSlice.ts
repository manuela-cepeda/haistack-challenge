import { createSlice } from '@reduxjs/toolkit';
import { getItems, addItem, updateItem, deleteItem } from '../thunks';

export interface Item {
	id: number;
	name: string;
	description: string;
}

interface ItemState {
	items: Item[];
	status: '' |  'error' | 'success'
	notification: string
	
}

const initialState: ItemState = {
	items: [],
	status: '',
	notification:''
};

export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		resetStatus: (state) => {
			state.status = '';
		  }, 
	},
	extraReducers: builder => {
		builder.addCase(getItems.fulfilled, (state, action) => {
			const { products } = action.payload;
			state.items =  products.map ((product: { id: number; title: string; description: string; }) => {
				return {
					"id": product.id,
					"name":  product.title ,
					"description": product.description
				 }
			});
		});

		builder.addCase(addItem.fulfilled, (state, action) => {
			state.items.push(action.payload);
			state.status = 'success';	
			state.notification = 'item successfully added'

		});

		builder.addCase(updateItem.fulfilled, (state, action) => {
			const item = {
				"id": action.payload.id,
				"name":  action.payload.title,
				"description": action.payload.description
			}
			state.items.push(item);
			state.status = 'success';
			state.notification = 'item successfully updated'
			
		});

		builder.addCase(deleteItem.fulfilled, (state, action) => {
			const {id} = action.payload
			state.items = state.items.filter((item) => item.id !== id);
			state.status = 'success';
			state.notification = 'item successfully deleted'			
		});
	},
});

export const {  resetStatus } = itemsSlice.actions
export default itemsSlice.reducer;
