"use client"
import { configureStore } from '@reduxjs/toolkit'
import cartData from './feature/cartSlice'
import contactSlice from './feature/ContactSlice'
export const store = configureStore({
  reducer: {
    ecommerce:cartData,
    message:contactSlice
  },
})