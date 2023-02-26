import React from 'react'
import './login.css'
import logo from '../Assets/logo.svg'

const CreatePassword = () => {
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
          
          <div className='inp-box'>
            <input type="text" placeholder='Email or Mobile Number' />
            <input type="password" placeholder='Password' />
          </div>
          <div className='submit-btns'>
            <button className='signin'>Signin</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CreatePassword