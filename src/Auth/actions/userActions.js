import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = "https://drfazl-server.vercel.app/api/v1/user/";

export const register = createAsyncThunk(
    'auth/register',
    async (email, thunkAPI) => {
        try {
            const response = await axios.post(url + 'register', { email });
            return response.data;
        } catch (error) {
            console.log("Error response: ", error.response);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const verify = createAsyncThunk(
    'auth/verify',
    async ({ email, otp }, thunkAPI) => {
        try {
            const response = await axios.post(url + 'verify', { email, otp });
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
            const response = await axios.post(url + 'createpassword', { email, password });
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
        try {
            const response = await axios.post(url + 'login', { email, password });
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
            const response = await axios.post(url + 'logout', { token: user.token });
            localStorage.removeItem('user');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

