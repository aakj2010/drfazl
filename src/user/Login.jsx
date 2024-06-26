import React, { useContext, useEffect, useState } from 'react'
import './login.css'
import logo from '../Assets/quran-logo.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import LanguageContext from '../context/LanguageContext'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearAuthError, login } from '../actions/userActions'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const context = useContext(LanguageContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { error, isAuthenticated } = useSelector(state => state.authState)

  const redirect = location.search ? '/' + location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/welcome")
    }
    if (error) {
      toast(error, {
        position: toast.POSITION.TOP_CENTER,
        type: 'error',
        onOpen: () => { dispatch(clearAuthError) }
      })
      return
    }
  }, [error, isAuthenticated, dispatch, navigate, redirect])

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
            <button className={context.language === 'Tamil' ? 'active-btn tamil-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("Tamil")}>தமிழ்</button>
            <button className={context.language === 'English' ? 'active-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("English")}>English</button>
            <button className='bi-ling-btn'>Bi-lingual</button>
          </div>

          <form onSubmit={submitHandler}>
            <div className='inp-box'>
              <input
                type="email"
                placeholder='Email ID'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className='forgot-link'>
                <NavLink to='/forgot-password'> <span className='signup-link'>Forgot your password?</span></NavLink>
              </div>
            </div>
            <div className='submit-btns'>
              {/* <NavLink className='signin'> */}
              <button 
                // type="submit"
                className='signin'
                // disabled={loading}
              >
                Sign In
              </button>
              {/* </NavLink> */}
              {/* <button className='google-btn'>
                <img src={google} alt="google" /><span>Sign In with Google</span>
              </button> */}
            </div>
          </form>
        </div>
        <div className='login-down-container'>
          <small>
            <span className='dont-have-acc'>Don’t have an account? </span>
            <NavLink to='register'><span className='signup-link'>Signup here</span></NavLink>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login