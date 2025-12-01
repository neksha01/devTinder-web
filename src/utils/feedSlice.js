import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
            return action.payload;
        },
        removeUserfromfeed:(state,action)=>{
            const newUser=state.filter((user)=>user._id!==action.payload);
            return newUser;       
        }
    }
})

export const {addfeed,removeUserfromfeed}=feedSlice.actions;
export default feedSlice.reducer;