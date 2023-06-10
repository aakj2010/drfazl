import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
    'auth/register',
    async (email, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/user/register', { email });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.email);
        }
    }
);

export const verify = createAsyncThunk(
    'auth/verify',
    async ({ email, otp }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/user/verify', { email, otp });
            console.log("Verify response: ", response);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const createPassword = createAsyncThunk(
    'auth/createPassword',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/user/createpassword', { email, password });
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        console.log("Email: ", email);
        console.log("Password: ", password);
        try {
            const response = await axios.post('http://localhost:8002/api/v1/user/login', { email, password });
            console.log('Server response login:', response.data);
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data;
        } catch (error) {
            console.log("Error response: ", error.response);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post('http://localhost:8002/api/v1/user/logout', { token: user.token });
            localStorage.removeItem('user');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

