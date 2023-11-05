import { createAsyncThunk } from "@reduxjs/toolkit"
import { Item } from "./itemsSlice"

export const fetchItems =  createAsyncThunk('items/fetch', async (thunkAPI)=>{
    const response = await fetch('https://dummyjson.com/products?limit=10&select=title,description')
    return response.json()
})    

export const saveItem =  createAsyncThunk('item/save', async (item:Item, thunkAPI)=>{
    const { name, description} = item
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: name,
          description: description
        })
      })
      
    return response.json()
})    

export const updateItem =  createAsyncThunk('item/update', async (item:Item, thunkAPI)=>{
    const {id, name, description} = item
    const response = await fetch(`https://dummyjson.com/products/${id}?select=title,description`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: name,
          description: description
        })
      })
      
    return response.json()
})    

