import { createSlice } from '@reduxjs/toolkit'
import { getAllProduct } from './api';

export const AllProduct = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity
            } else {
                state.cart.push({ 
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        incrementQuantity: (state, action) => {
            state.cart.map((item) => {
                if(item.product.id === action.payload) {
                    item.quantity++
                }
            })
        },
        decrementQuantity: (state, action) => {
            state.cart.map((item) => {
                if(item.product.id === action.payload) {
                    if(item.quantity <= 0) {
                        item.quantity = 0
                    } else {
                        item.quantity--
                    }
                }
            })
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.product.id !== action.payload);
            state.cart = removeItem;
        },
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions