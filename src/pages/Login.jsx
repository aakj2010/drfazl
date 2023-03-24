import React from 'react'
import './login.css'
import logo from '../Assets/logo.svg'
import google from '../Assets/google.svg'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='login-container'>
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
          <div className='lang-btn'>
            <button className='bi-ling-btn'>தமிழ்</button>
            <button className='active-eng-btn'>English</button>
            <button className='bi-ling-btn'>Bi-lingual</button>
          </div>
          <div className='inp-box'>
            <input type="text" placeholder='Email or Mobile Number' />
            <input type="password" placeholder='Password' />
            <div className='forgot-link'>
              <NavLink to='/forgot-password'> <span className='signup-link'>Forgot your password?</span></NavLink>
            </div>
          </div>
          <div className='submit-btns'>
            <NavLink to='/welcome' className='signin'>
              <button className='signin'>Sign in</button>
            </NavLink>
            <button className='google-btn'>
              <img src={google} alt="google" /><span>Signin with Google</span>
            </button>
          </div>
        </div>
        <div className='login-down-container'>
          <small>
            <span className='dont-have-acc'>Don’t have an account? </span>
            <NavLink to='register'><span className='signup-link' to="/signup">Signup here</span></NavLink>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login