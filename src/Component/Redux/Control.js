import {createSlice} from "@reduxjs/toolkit";


const control = createSlice({
    name: 'counter',
    initialState:0,
    reducers: {
        increment:(state)=>state + 1,
        Decrement:(state)=>state - 1,
    },
});


export const {increment,Decrement} = control.actions;

export default control.reducer;