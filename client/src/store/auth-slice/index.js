import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';

const initialState={
    isAuthenticated:true,
    isLoading:true,
    user: null
}

export const registerUser = createAsyncThunk(
    'auth/register', 
    async (formData,{rejectWithValue})=>{
        try{
        const response = await axios.post('http://localhost:8080/api/auth/register',
             formData,{
               withCredentials:true,
                 headers: {
                  "Content-Type": "application/json",
                 },
        })
        return response.data
            }catch(error){
                toast(error.response.data.message,{
                    style: {
                      border:'1px solid red',  
                      background:'red',
                      color:'white'
                    }
                  })
                return rejectWithValue(error.response.data);
        }
    })

export const checkAuthUser = createAsyncThunk(
    'auth/check-auth', 
    async (_,{rejectWithValue})=>{
        try{
        const response = await axios.get('http://localhost:8080/api/auth/check-auth',
            {
                withCredentials:true,
                headers:{
                    'Cache-Control':'no-store, no-cache, must-revalidate proxy-revalidate',
                    'Expires':'0'
                }
            }
        )
        return response.data
            }catch(error){
                toast(error.response.data.message,{
                    style: {
                      border:'1px solid red',  
                      background:'red',
                      color:'white'
                    }
                  })
                return rejectWithValue(error.response.data);
        }
    })    

export const loginUser = createAsyncThunk(
    'auth/login', 
    async (formData,{rejectWithValue})=>{
        try{
        const response = await axios.post('http://localhost:8080/api/auth/login',
             formData,{
               withCredentials:true,
                headers: {
                  "Content-Type": "application/json",
                 },
        })
        return response.data
            }catch(error){
                toast(error.response.data.message,{
                    style: {
                      border:'1px solid red',  
                      background:'red',
                      color:'white'
                    }
                  })
                return rejectWithValue(error.response.data);
        }
    })

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/logout", null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: "Logout failed" });
  }
});    


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser:(state,action)=>{
            console.log(state,action);
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending, (state)=>{
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
        .addCase(loginUser.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            console.log(action)
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })
         .addCase(checkAuthUser.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(checkAuthUser.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload
        })
        .addCase(checkAuthUser.rejected, (state)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })
    
        
        .addCase(logoutUser.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload
        })
        .addCase(logoutUser.rejected, (state)=>{
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        })


    }
    

})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;