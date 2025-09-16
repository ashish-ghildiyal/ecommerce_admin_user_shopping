import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import AdminProductsSlice  from '../store/admin/products-slice'
import ShopProductsSlice from '../store/shop/product-slice'



const store = configureStore({
 reducer:{
    auth: authReducer,
    adminProducts: AdminProductsSlice,
    shopProducts: ShopProductsSlice
 }
})

export default store;