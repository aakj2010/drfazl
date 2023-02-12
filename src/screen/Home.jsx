import React from 'react'
import './home.css'
import bg from '../Assets/bg.svg'

// import { li } from 'react-router-dom'

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='img'>
                <img src={bg} alt="come what may" />
            </div>
        </div>
    )
}

export default Home