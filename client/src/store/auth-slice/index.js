import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';

const initialState={
    isAuthenticated:false,
    isLoading:false,
    user: null
}

export const registerUser = createAsyncThunk(
    'auth/register', 
    async (formData,{rejectWithValue})=>{
        try{
        const response = await axios.post('http://localhost:8080/api/auth/register',
             formData,{
                headers:{
                    'Content-Type':'application/json'
                }
        })
        return response.data
            }catch(error){
                toast(error.response.data.message)
                return rejectWithValue(error.response.data);
        }
    })

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser:(state,action)=>{
            console.log(state,action);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })
    }
    

})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;