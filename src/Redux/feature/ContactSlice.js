"use client"

import { createSlice } from "@reduxjs/toolkit"


export const  contactSlice = createSlice({
    name: "messageSend",
    initialState:{
        show:false
    },

    reducers: {
        showMessage:(state,action) =>{
            state.show=action.payload
        }
    }
})  

export const {showMessage} = contactSlice.actions

export default contactSlice.reducer