import axios from 'axios';
import {
    clearError,
    forgotPasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    loginRequest,
    loginFail,
    loginSuccess,
    logoutFail,
    logoutSuccess,
    registerFail,
    registerRequest,
    registerSuccess,
    resetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    updatePasswordFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess
} from "../slice/authSlice"
const API_URL = 'https://drfazl-server.vercel.app/api/v1/'
// const API_URL = 'http://localhost:8002/api/v1/'
// axios.create({
//     // baseURL: API_URL,
//     withCredentials: true,
// });
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axios.post(API_URL + 'login', { email, password }, { withCredentials: true });
        dispatch(loginSuccess(data))
        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }
}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const { data } = await axios.post(API_URL + 'register', { name, email, password });
        dispatch(registerSuccess(data))
        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }
}


export const loadUser = async (dispatch) => {
    try {
        dispatch(loadUserRequest());

        const { data } = await axios.get(API_URL + 'myprofile');

        dispatch(loadUserSuccess(data))

    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}


export const logout = async (dispatch) => {
    try {
        await axios.get(API_URL + 'logout');
        localStorage.removeItem('user')
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail())
    }
}


export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest());
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put(API_URL + 'update', userData, config);
        dispatch(updateProfileSuccess(data))
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message))
    }
}


export const updatePassword = (formData) => async (dispatch) => {
    try {
        dispatch(updatePasswordRequest());
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        await axios.put(API_URL + 'password/change', formData, config);
        dispatch(updatePasswordSuccess())
    } catch (error) {
        dispatch(updatePasswordFail(error.response.data.message))
    }
}
export const forgotPassword = (formData) => async (dispatch) => {
    try {
        dispatch(forgotPasswordRequest());
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post(API_URL + 'password/forgot', formData, config);
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordFail(error.response.data.message))
    }
}
export const resetPassword = (formData, token) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest());
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post(API_URL + `password/reset/${token}`, formData, config);
        dispatch(resetPasswordSuccess(data))
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message))
    }
}


// export const getUsers =  async (dispatch) => {

//     try {
//         dispatch(usersRequest())
//         const { data }  = await axios.get(`/api/v1/admin/users`);
//         dispatch(usersSuccess(data))
//     } catch (error) {
//         dispatch(usersFail(error.response.data.message))
//     }

// }

// export const getUser = id => async (dispatch) => {

//     try {
//         dispatch(userRequest())
//         const { data }  = await axios.get(`/api/v1/admin/user/${id}`);
//         dispatch(userSuccess(data))
//     } catch (error) {
//         dispatch(userFail(error.response.data.message))
//     }

// }

// export const deleteUser = id => async (dispatch) => {

//     try {
//         dispatch(deleteUserRequest())
//         await axios.delete(`/api/v1/admin/user/${id}`);
//         dispatch(deleteUserSuccess())
//     } catch (error) {
//         dispatch(deleteUserFail(error.response.data.message))
//     }

// }

// export const updateUser = (id, formData) => async (dispatch) => {

//     try {
//         dispatch(updateUserRequest())
//         const config = {
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         }
//         await axios.put(`/api/v1/admin/user/${id}`, formData, config);
//         dispatch(updateUserSuccess())
//     } catch (error) {
//         dispatch(updateUserFail(error.response.data.message))
//     }

// }