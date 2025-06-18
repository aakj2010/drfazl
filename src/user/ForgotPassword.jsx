import React, { useState } from 'react'
import './login.css'
import logo from '../Assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../hooks/userAuthentication';

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const { forgotPassword, error } = useAuthentication()

  const [validationError, setValidationError] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setValidationError('Email cannot be empty')
      return
    }
    setValidationError(null)
    forgotPassword({ email });
    navigate('/')
  }

  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <div className='login-up-container'>
          <div className='title-with-image'>
            <div className='logo'>
              <img src={logo} alt="Logo" width="50px" height="50px" loading="lazy" />
            </div>
            <div className="login-title">
              <h4>Quran</h4>
              <h6>drfazl</h6>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='inp-box'>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='submit-btns'>
              <button type='submit' className='signin'>Submit</button>
            </div>
          </form>
          {
            validationError && <div className="text-red-500" role="alert">
              {validationError}
            </div>
          }
          {
            error && <div className="text-red-500" role="alert">
              {error}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
