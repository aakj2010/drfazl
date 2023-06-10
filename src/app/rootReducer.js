import { combineReducers } from 'redux';
import { } from '../Auth/reducers/authSlice';
import { createPassword, register, verify } from '../Auth/actions/userActions';

const rootReducer = combineReducers({
    userRegister: register,
    userVerify: verify,
    userCreatePassword: createPassword,
    // userLogin: loginUserReducer,
});

export default rootReducer;
