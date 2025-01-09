import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAllProduct = createAsyncThunk('list/product', async (args, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})