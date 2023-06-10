import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../Assets/logo.svg';
import './Signup.css';
import { useDispatch } from 'react-redux';
import { register } from '../Auth/actions/userActions';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await dispatch(register(email)).unwrap();
            // navigate to verify page after successful registration
            navigate('/verify');
        } catch (error) {
            console.error("Failed to register:", error);
            // handle error here, e.g. show a message to the user
        }
    };


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
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='submit-btns'>
                            <button type="submit" className='next-btn'>
                                Next
                            </button>
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
        </div >
    )
}

export default SignUp
