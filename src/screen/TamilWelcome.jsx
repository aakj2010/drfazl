import React, { useEffect, useState } from 'react'
import './landingPage.css'
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom';

const TamilWelcome = () => {
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
                <>
                    <div className='landing-text-box'>
                        <p className='landing-text'>மனிதர்களிலும், ஜின்களிலும் உள்ள விரட்டப்பட்ட  ஷைத்தான்களிடமிருந்து, இறைவனே உன்னிடமே பாதுகாவல் தேடுகிறேன்.</p>
                        <Link to='/Chapters'>
                            <button className='start-btn'>நுழைக</button>
                        </Link>
                    </div>

                </>
            }


        </div>
    )
}

export default TamilWelcome