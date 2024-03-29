import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import itemsReducer from './features/itemsSlice';

export const store = configureStore({
	reducer: {
		items: itemsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
