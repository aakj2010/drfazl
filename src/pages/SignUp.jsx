import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import './Signup.css';

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    console.log(phoneNumber)
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
                    <div className='inp-box'>
                        <input
                            type="text"
                            placeholder='Email or Mobile Number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className='submit-btns'>
                        <button className='next-btn'>Next</button>
                    </div>
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