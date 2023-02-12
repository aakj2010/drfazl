import React from 'react'
import './Chapters.css'
// import bg from '../Assets/bg.svg'
import { NavLink, Outlet } from 'react-router-dom'
// import Footer from '../layout/Footer'

function Chapters() {
    return (
        <>
            <div className='chapters'>
                <div className='img-container' >
                    <div class="bottom-left">Quran</div>
                </div>
                <div className='chapter-list-wrapper'>
                    <div className='chapter-list-items'>
                        <NavLink to='' className="list-items">1. Victory upon Victory</NavLink>
                        <NavLink to='chapter2' className="list-items" >2. Pasu </NavLink>
                        <NavLink to='chapter3' className="list-items">3. Imran’s Family</NavLink>
                        <NavLink to='chapter4' className="list-items">4. Women</NavLink>
                        <NavLink to='chapter5' className="list-items">5. Unavu maravai</NavLink>
                        <NavLink to='chapter6' className="list-items">6. Kalnadaigal</NavLink>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Chapters