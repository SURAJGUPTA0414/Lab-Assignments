// import { createSlice } from '@reduxjs/toolkit';

// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

 
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
  },
  reducers: {
    setName: (state, action) => {
        console.log(action)
      state.name = action.payload;
      console.log(action.payload);
    },
    setAge: (state, action) => {
        console.log(action)
      state.age = action.payload;
      console.log(action.payload);
    },
    resetUser: (state) => {
      state.name = '';
      state.age = 0;
    },
  },
});
 
export const { setName, setAge, resetUser } = userSlice.actions;
export default userSlice.reducer;