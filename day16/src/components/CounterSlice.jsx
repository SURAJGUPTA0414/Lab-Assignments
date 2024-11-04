 
// import { createSlice } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
 
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      console.log(state.action)
      state.value += 1;
    },
    decrement: (state) => {
      console.log(state)
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
 
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
 
export default counterSlice.reducer;
 
 