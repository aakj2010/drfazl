import React, { useState } from 'react'
import './login.css'
import logo from '../Assets/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { createPassword } from '../Auth/actions/userActions'
import { useNavigate } from 'react-router-dom';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.auth?.email);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email && password && password === confirmPassword) {
      dispatch(createPassword({ email, password }));
      navigate('/Chapters');
    } else {
      setError('Passwords did not match!');
    }
  }

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

          <form onSubmit={submitHandler}>
            <div className='inp-box'>
              <input
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='submit-btns'>
              <button type='submit' className='signin'>Sign in</button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default CreatePassword
