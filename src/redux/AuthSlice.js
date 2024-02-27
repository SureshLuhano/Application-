import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginApi, registerApi, updateUserApi, deleteAccountApi } from '../api/authApi';
import axios from 'axios';

// Async thunk action creators
export const loginUser = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginApi(credentials);
  return response.data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerApi(userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// export const updateUser = createAsyncThunk('auth/updateUser', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await updateUserApi(userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const deleteAccount = createAsyncThunk('auth/deleteAccount', async (userId, { rejectWithValue }) => {
//   try {
//     await deleteAccountApi(userId);
//     return userId;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// Slice definition
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload.data, "lkjkljh")
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    
  },
});

export default authSlice.reducer;
