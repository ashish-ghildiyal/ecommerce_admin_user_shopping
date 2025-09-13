import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    isLoading:false,
    products:[]
}

export const addNewProduct = createAsyncThunk(
    'products/addnewproduct', 
    async (formData,{rejectWithValue})=>{
        try{
        const response = await axios.post('http://localhost:8080/api/admin/products/add',
             formData,{
                headers: {
                   "Content-Type": "application/json",
                }
             })
        return response.data
            }catch(error){
                return rejectWithValue(error.response.data);
        }
    }
)

export const editProduct = createAsyncThunk(
    'products/edit-product', 
    async ({id,formData},{rejectWithValue})=>{
        try{
        const response = await axios.put(`http://localhost:8080/api/admin/products/edit/${id}`,
             formData,{
                headers: {
                  "Content-Type": "application/json",
                }
             })
        return response.data
            }catch(error){
                return rejectWithValue(error.response.data);
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/delete-product', 
    async ({id},{rejectWithValue})=>{
        try{
            
        const response = await axios.delete(`http://localhost:8080/api/admin/products/delete/${id}`,
             {
                headers: {
                  "Content-Type": "application/json",
                }
             })
        return response.data
            }catch(error){
                return rejectWithValue(error.response.data);
        }
    }
)


export const getAllProducts = createAsyncThunk(
    'products/get-all-products', 
    async (_,{rejectWithValue})=>{
        try{
        const response = await axios.get('http://localhost:8080/api/admin/products/fetch')
        return response.data
            }catch(error){
                return rejectWithValue(error.response.data);
        }
    }
)


const AdminProductsSlice = createSlice({
    name:'adminProducts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addNewProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(addNewProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            if (action.payload?.product) {
                 state.products.push(action.payload.product); // append new product
                 }
        })
        .addCase(addNewProduct.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })
          .addCase(editProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(editProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(editProduct.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })
        .addCase(deleteProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(deleteProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(deleteProduct.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })
         .addCase(getAllProducts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled, (state,action)=>{
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(getAllProducts.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })
    }
})

export default AdminProductsSlice.reducer