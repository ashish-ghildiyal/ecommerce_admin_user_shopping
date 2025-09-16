import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    isLoading:false,
    products: []
}



export const getAllProducts = createAsyncThunk(
    'products/get-all-products', 
    async (_,{rejectWithValue})=>{
        try{
        const response = await axios.get('http://localhost:8080/api/shop/products/fetch')
        return response?.data
            }catch(error){
                return rejectWithValue(error.response.data);
        }
    }
)


const ShopProductsSlice = createSlice({
    name:'adminProducts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
         .addCase(getAllProducts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled, (state,action)=>{
            state.isLoading = false
            state.products = action?.payload?.data
        })
        .addCase(getAllProducts.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })
    }
})

export default ShopProductsSlice.reducer