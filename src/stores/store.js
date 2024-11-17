import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import  searchReducer from "./SearchSlice";




const rootReducer = {
  cart: cartReducer,
  search:searchReducer,
  
  
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
