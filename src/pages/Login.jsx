import React, { useContext, useEffect, useState } from 'react'
import './login.css'
import logo from '../Assets/logo.svg'
import google from '../Assets/google.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import LanguageContext from '../context/LanguageContext'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Auth/actions/userActions'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const context = useContext(LanguageContext);

  // Add state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Select the user information from state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth)

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    dispatch(login({ email, password }))
      .then(() => console.log("Login action dispatched"))
      .catch((error) => console.log('Error dispatching login action: ', error));
  };

  useEffect(() => {
    console.log("useEffect called", user);

    if (isSuccess || user) {
      navigate('/welcome')
    }
    if (!user) {
      navigate("/"); //navigate to login component
    }
  }, [user, isSuccess, navigate]);


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
            <button className={context.language === 'Tamil' ? 'active-eng-btn tamil-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("Tamil")}>தமிழ்</button>
            <button className={context.language === 'English' ? 'active-eng-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("English")}>English</button>
            <button className='bi-ling-btn'>Bi-lingual</button>
          </div>

          <form onSubmit={submitHandler}>
            <div className='inp-box'>
              <input
                type="text"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='forgot-link'>
                <NavLink to='/forgot-password'> <span className='signup-link'>Forgot your password?</span></NavLink>
              </div>
            </div>
            <div className='submit-btns'>
              {/* <NavLink className='signin'> */}
              <button type="submit" className='signin' >Sign in</button>
              {/* </NavLink> */}
              <button className='google-btn'>
                <img src={google} alt="google" /><span>Signin with Google</span>
              </button>
            </div>
          </form>
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