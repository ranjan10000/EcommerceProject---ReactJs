import { configureStore } from "@reduxjs/toolkit";
import RootReducer from '../reducer/RootReducer'

const store = configureStore({
    reducer: RootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});
  
  export default store;