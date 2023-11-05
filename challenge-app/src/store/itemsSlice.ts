import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchItems, saveItem, updateItem } from './thunks';

export interface Item {
  id:number;
  name:string;
  description:string;
}

interface ItemState{
  items: Item[]
}

const initialState: ItemState = {
  items: []
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: { },
  extraReducers:(builder)=>{
    builder.addCase(fetchItems.fulfilled, (state,action)=>{
      const {products} = action.payload
      state.items = products
    })

    builder.addCase(saveItem.fulfilled, (state,action)=>{
      state.items.push(action.payload)
    })

    builder.addCase(updateItem.fulfilled, (state,action)=>{
      state.items.push(action.payload)
    })
  }

})

// Action creators are generated for each case reducer function
// export const {   } = itemsSlice.actions
export default itemsSlice.reducer