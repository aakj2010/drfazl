import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../Assets/quran-logo.svg';
import './Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import Spinner from './Spinner';
import { register, clearAuthError } from '../actions/userActions';


const SignUp = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(userName, email, password))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/welcome')
            return
        }
        if (error) {
            toast(error, {
                position: toast.POSITION.TOP_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearAuthError) }
            })
            return
        }
    }, [error, isAuthenticated, dispatch, navigate])


    return (
        <div className='signup-wrapper'>
            <div className='signup-container'>
                <div className='login-up-container'>
                    <div className='title-with-image'>
                        <div className='logo'>
                            <img src={logo} alt="" width="50px" height="50px" />
                        </div>
                        <div className="login-title">
                            <h4>Quran</h4>
                            <h6>drfazl</h6>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className='inp-box'>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={userName}
                                placeholder='Enter your name'
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='inp-box'>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={email}
                                placeholder='Enter your email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='inp-box'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {/* <div className='inp-box'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={onChange}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div> */}
                        <div className='submit-btns'>
                            <button
                                // type="submit"
                                className='next-btn'
                                // disabled={loading}
                                 >
                                Register
                            </button>
                            {/* <button className='google-btn'>
                                <img src={google} alt="google" />
                                <span>Sign In with Google</span>
                            </button> */}
                        </div>
                    </form>
                </div>
                <div className='login-down-container'>
                    <small>
                        <span className='dont-have-acc'>Already have an account? </span>
                        <NavLink to="/"><span className='signup-link' > Sign in here</span></NavLink>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default SignUp
