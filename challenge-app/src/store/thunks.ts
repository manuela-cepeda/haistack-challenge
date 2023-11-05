import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Item } from './itemsSlice';

// using https://dummyjson.com/ to simulate API calls with fake JSON data

export const getItems = createAsyncThunk('items/fetch', async thunkAPI => {
	const response = await fetch(
		'https://dummyjson.com/products?limit=10&select=title,description',
	);
	return await response.json();
});

export const addItem = createAsyncThunk(
	'item/add',
	async (item: Item, thunkAPI) => {
		const { name, description } = item;
		const response = await fetch('https://dummyjson.com/products/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: name,
				description,
			}),
		});

		return await response.json();
	},
);

export const updateItem = createAsyncThunk(
	'item/update',
	async (item: Item, thunkAPI) => {
		const { id, name, description } = item;
		const response = await fetch(`https://dummyjson.com/products/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: name,
				description,
			}),
		});

		return await response.json();
	},
);

export const deleteItem = createAsyncThunk(
	'item/delete',
	async (item: Item, thunkAPI) => {
		const { id } = item;
		const response = await fetch(`https://dummyjson.com/products/${id}`, {
			method: 'DELETE',
		});

		return await response.json();
	},
);
