import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/cartSlice.js'
import { productApi } from "./Slices/apiSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store=configureStore({
    reducer:{
        cart:cartReducer,
        [productApi.reducerPath]:productApi.reducer 
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware),
})
setupListeners(store.dispatch)