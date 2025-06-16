import React, { useContext, useState } from 'react'
import './login.css'
import logo from '../Assets/quran-logo.svg'
import { NavLink } from 'react-router-dom'
import LanguageContext from '../context/LanguageContext'
import { useAuthentication } from '../hooks/userAuthentication'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const context = useContext(LanguageContext);
  const { login, error } = useAuthentication()
  console.log(error)

  const [validationError, setValidationError] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            setValidationError('Email cannot be empty')
            return
        }
        else if (!password) {
            setValidationError('Password cannot be empty')
            return
        }

        setValidationError(null)

        console.log({ email, password })
        login({ email, password })
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
          <div className='lang-btn'>
            <button className={context.language === 'Tamil' ? 'active-btn tamil-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("Tamil")}>தமிழ்</button>
            <button className={context.language === 'English' ? 'active-btn' : 'bi-ling-btn'} onClick={() => context.setLanguage("English")}>English</button>
            <button className='bi-ling-btn'>Bi-lingual</button>
          </div>

          <form onSubmit={handleSubmit}>
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
            <div className='submit-btns'>
              <button
                type="submit"
                className='signin'
              >
                Sign In
              </button>
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