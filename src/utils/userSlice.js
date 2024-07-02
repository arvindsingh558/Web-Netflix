import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";

const userSlice=createSlice({
    name:"user",
    initialState:{},
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
        removeUser:(state,action)=>{
            return null
        }
    }
})

export const  {addUser, removeUser}=userSlice.actions

export default userSlice.reducer;