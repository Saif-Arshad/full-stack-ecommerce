"use client"

import { createSlice } from '@reduxjs/toolkit'
import { Products } from '@/Data/Products'


const initialState = {
  cart:[],
  items:Products,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart: (state,action) =>{
        let find = state.cart.findIndex((item)=>item.id ===action.payload.id)
        if (find !== -1) {
            state.cart[find].quantity += 1; 
        } else {
            state.cart.push({ ...action.payload, quantity: 1 }); 
        }
      }
  },
})

export const { addToCart} = cartSlice.actions

export default cartSlice.reducer