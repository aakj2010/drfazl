import React from 'react'
import './home.css'
import bg from '../Assets/bg.svg'

// import { li } from 'react-router-dom'

function Home() {
    return (
            <div className='home-wrapper'>
                <div className='img'>
                    <figure>
                        <img className='img' src={bg} alt="come what may" />
                    </figure>
                </div>
            </div>
    )
}

export default Home