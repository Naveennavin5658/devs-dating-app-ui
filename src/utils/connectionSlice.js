/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const feedConnection = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnection: (state, action) =>{
            return action.payload
        },
        removeConnection: (state,action)=>{
            return null
        }
    }
})

export const {addConnection,removeConnection} = feedConnection.actions;

export default feedConnection.reducer;