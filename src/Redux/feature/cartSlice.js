"use client"

import { createSlice } from '@reduxjs/toolkit'
import { Products } from '@/Data/Products'


const initialState = {
  cart:[],
  totalPrice:0,
  items:Products,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex(item => item.id === action.payload.id);
      if (find !== -1) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
     
      state.totalPrice = state.cart.reduce((total, item) => total + (item.actualprice * item.quantity || 0), 0);

    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      // Calculate total price
      state.totalPrice = state.cart.reduce((total, item) => total + (item.actualprice * item.quantity || 0), 0);
    },
  },
})
export const { addToCart,removeCartItem} = cartSlice.actions

export default cartSlice.reducer