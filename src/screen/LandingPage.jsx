import React, { useContext, useEffect, useState } from 'react'
import './landingPage.css'
import logo from '../Assets/quran-logo.svg'
import { Link } from 'react-router-dom'
import LanguageContext from '../context/LanguageContext'

const LandingPage = () => {
    const [show, setShow] = useState(false)

    const languageContext = useContext(LanguageContext);

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
                        <img src={logo} alt="Logo" width="80px" height="80px" loading="lazy" />
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
                        <img src={logo} alt="Logo" width="44px" height="44px" loading="lazy" />
                    </div>
                    {
                        languageContext.language === 'Tamil' ? (
                            <div className='logo-with-textbox'>
                                <div className='landing-text-box'>
                                    <p className='landing-text'>மனிதர்களிலும் ஜின்களிலும் உள்ள
                                        விரட்டப்பட்ட ஷைத்தான்களை விட்டும் என் இறைவனே உன்னிடமே
                                        பாதுகாவல் தேடுகிறேன்.</p>
                                </div>
                                <div>
                                    <Link to='/home'>
                                        <button className='text-center w-[140px] h-9 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] bg-[linear-gradient(_279deg,_#243B5D_-71.08%,_#4B7CC3_174.39%)] rounded not-italic font-semibold text-sm leading-[140%] text-white mt-8 px-4 py-2 border-none'>நுழைக</button>
                                    </Link>
                                </div>
                            </div>

                        ) : (
                            <div className='logo-with-textbox'>
                                <div className='landing-text-box'>
                                    <p className='landing-text'> My Lord, I seek your protection from the accursed Shaithans in Men and Jinns.</p>
                                </div>
                                <Link to='/home' className='text-center w-[140px] h-9 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] bg-[linear-gradient(_279deg,_#243B5D_-71.08%,_#4B7CC3_174.39%)] rounded not-italic font-semibold text-sm leading-[140%] text-white mt-8 px-4 py-2 border-none'>
                                    Start Reading
                                </Link>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default LandingPage