
import counterReducer from './CounterSlice'
import userReducer from './userSlice';

import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
