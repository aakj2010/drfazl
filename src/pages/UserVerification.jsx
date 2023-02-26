import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import './userverification.css'

const UserVerification = () => {
    return (
        <div className='verify-wrapper'>
            <div className='verify-container'>
                <div className='verify-up-container'>
                    <div className='title-with-image'>
                        <div className='logo'>
                            <img src={logo} alt="" width="50px" height="50px" />
                        </div>
                        <div className="login-title">
                            <h4>Quran</h4>
                            <h6>drfazl</h6>
                        </div>
                        <div className='verify-field'>
                            <div className='otp-wrapper'>
                                <input type="number" maxLength="1" max="9" min="0"/>
                                <input type="number" maxLength="1" max="9" min="0"/>
                                <input type="number" maxLength="1" max="9" min="0"/>
                                <input type="number" maxLength="1" max="9" min="0"/>
                            </div>
                            <div className='verify-btn-wrapper'>
                                <button className='verify-btn'>Verify</button>
                            </div>

                            <div className='verify-text'>Enter Verification Code sent to your <br />
                            Mobile Number / Email</div>
                        </div>
                    </div>
                </div>
                <div className='login-down-container'>
                    <small>
                        <span className='dont-have-acc'>Not Received? </span>
                        <NavLink to='register'><span className='signup-link' to="/signup">Resend Code</span></NavLink>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default UserVerification