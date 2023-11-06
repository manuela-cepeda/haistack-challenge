import { createAsyncThunk } from "@reduxjs/toolkit"


// using  https://dummyjson.com/ to simulate fetch with fake JSON data

export const getItems =  createAsyncThunk('items/fetch', async (thunkAPI)=>{
    const response = await fetch('https://dummyjson.com/products?limit=30&select=title,description')
    return await response.json()
})    


export const addItem =  createAsyncThunk('item/add', async (item:any, thunkAPI)=>{

    const { name, description} = item

      // Adding a new product will not add it into the server.
      // It will simulate a POST request and will return the new created product with a new id
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: name,
          description
        })
      })

      return await response.json()
})    

export const updateItem =  createAsyncThunk('item/update', async (item:any, thunkAPI)=>{
    const {id, name, description} = item

    // Updating a product will not update it into the server.
    // It will simulate a PUT/PATCH request and will return the product with modified data
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: name,
          description
        })
      })

    return await response.json()
})    

export const deleteItem =  createAsyncThunk('item/delete', async (id:any, thunkAPI)=>{
    // Deleting  a product will not delete it into the server.
    // It will simulate a DELETE request and will return deleted product with "isDeleted" & "deletedOn" keys
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      })
      
    return await response.json()
})    
