import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../Assets/logo.svg'
import './userverification.css'
import { useDispatch, useSelector } from 'react-redux'
import { verify } from '../Auth/actions/userActions'

const UserVerification = () => {
    const [otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector(state => state.auth?.email);
    console.log(email)
    const authError = useSelector(state => state.auth?.error);
    const isVerified = useSelector(state => state.auth?.isVerified);
    console.log("isVerified: ", isVerified);


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("OTP: ", otp);
        if (email) {
            try {
                await dispatch(verify({ email, otp }));
            } catch (err) {
                console.error(err.message);
            }
        }
    }


    useEffect(() => {
        if (isVerified) {
            navigate('/createpassword');
        }
    }, [isVerified, navigate])


    console.log(email, otp)
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
                        <form onSubmit={submitHandler}>
                            <div className='verify-field'>
                                <div className='otp-wrapper inp-box'>
                                    {/* <input type="number" maxLength="1" max="9" min="0" />
                                    <input type="number" maxLength="1" max="9" min="0" />
                                    <input type="number" maxLength="1" max="9" min="0" />
                                    <input type="number" maxLength="1" max="9" min="0" /> */}
                                    <input
                                        type="number" maxLength="4"
                                        placeholder='Enter Otp'
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)} />
                                </div>
                                <div className='verify-btn-wrapper'>
                                    <button type='submit' className='verify-btn'>Verify</button>
                                </div>
                                <div className='verify-text'>Enter Verification Code sent to your Email</div>
                            </div>
                        </form >
                    </div>
                </div>
                {authError && (
                    <div className="error-message" style={{ color: 'red' }}>
                        {authError}
                    </div>
                )}
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
