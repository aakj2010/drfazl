import React, { useEffect, useState } from 'react'
import './landingPage.css'
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(!show)
        }, 3000)
    }, [])

    return (
        <div className='landing_page'>
            {
                !show && <div className='title-with-image'>
                    <div className='logo'>
                        <img src={logo} alt="" width="80px" height="80px" />
                    </div>
                    <div className="landing-title">
                        <h4>Quran</h4>
                        <h6>drfazl</h6>
                    </div>
                </div>
            }

            {
                show &&
                <div className='land-page'>
                    <div className='logo'>
                        <img src={logo} alt="" width="44px" height="44px" />
                    </div>
                    <div className='logo-with-textbox'>
                        <div className='landing-text-box'>
                            <p className='landing-text'> My Lord, I seek your protection from the accursed Shaithans in Men and Jinns.</p>
                        </div>
                    </div>
                    <div>
                        <Link to='/Chapters'>
                            <button className='start-btn'>Start Reading</button>
                        </Link>
                    </div>
                </div>
            }


        </div>
    )
}

export default LandingPage