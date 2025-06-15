import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import useNavigate
import logo from '../Assets/quran-logo.svg';
import './Signup.css';
import { useAuthentication } from '../hooks/userAuthentication';


const SignUp = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signup, error } = useAuthentication()

    const [validationError, setValidationError] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userName) {
            setValidationError('First Name cannot be empty')
            return
        }
        else if (!email) {
            setValidationError('Email cannot be empty')
            return
        }
        else if (!password) {
            setValidationError('Password cannot be empty')
            return
        }

        setValidationError(null)
        console.log({ email, password, userName })
        signup({ email, password, userName })
    }

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
                    <form onSubmit={handleSubmit}>
                        <div className='inp-box'>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={userName}
                                placeholder='Enter your name'
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='inp-box'>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={email}
                                placeholder='Enter your email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='inp-box'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {/* <div className='inp-box'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={onChange}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div> */}
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
                                // type="submit"
                                className='signin'
                            // disabled={loading}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className='login-down-container'>
                    <small>
                        <span className='dont-have-acc'>Already have an account? </span>
                        <NavLink to="/"><span className='signup-link'> Sign in here</span></NavLink>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default SignUp
