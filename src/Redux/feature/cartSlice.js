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
    
  },
})

// export const { addCart,showCart,removeCartItem} = cartSlice.actions

export default cartSlice.reducer