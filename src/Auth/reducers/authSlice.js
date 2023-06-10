import { createSlice } from '@reduxjs/toolkit';
import { register, verify, createPassword, login, logout } from '../actions/userActions';

const initialState = {
    loading: false,
    isSuccess: false,
    isAuthenticated: false,
    email: null,
    error: null,
    message: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutReducer: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                // Extract the email portion from the payload
                state.email = payload.email;
                state.isAuthenticated = true;
                state.isSuccess = true
                state.loading = false;
                state.user = payload
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = action.payload;
            })
            .addCase(verify.pending, (state) => {
                state.loading = true;
            })
            .addCase(verify.fulfilled, (state, action) => {
                console.log("Verify fulfilled: ", action.payload);
                state.loading = false;
                state.isSuccess = true
                state.isAuthenticated = true;
                state.isVerified = action.payload.success;
                console.log("State after verify fulfilled: ", state);
            })

            .addCase(verify.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isVerified = false; // Consider updating isVerified in case of failure too
            })
            .addCase(createPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPassword.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = true;
            })
            .addCase(createPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.email = null;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.message = action.payload;
            });

    },
});

export const { logoutReducer } = authSlice.actions;
export default authSlice.reducer;
