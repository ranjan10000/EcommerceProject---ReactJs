import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch users (GET request)
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:8080/api/users/getusers');

  console.log('api call fetchUsers ' + JSON.stringify(response.data));
  return response.data.response.response.map(user => ({
    userId: user.userId  || 'N/A',
    userName: user.username  || 'N/A',
    roleName:user.roleName  || 'N/A', 
    features: user.features || [] 
  }));
});

// Register user (POST request)
export const registerUser = createAsyncThunk('users/registerUser', async (userData) => {
  const response = await axios.post('http://localhost:8080/api/register', userData);
  return response.data.response.response; // The new user is inside response.response
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [], // Initialize as an empty array to store multiple users
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Add new user to the array
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.userId === action.payload.userId);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.userId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Set users to the fetched array of users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add the newly created user to the list
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
