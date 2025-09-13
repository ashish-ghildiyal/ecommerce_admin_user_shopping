import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import AdminProductsSlice  from '../store/admin/products-slice'



const store = configureStore({
 reducer:{
    auth: authReducer,
    adminProducts: AdminProductsSlice
 }
})

export default store;