import React from 'react'

import './Chapters.css'
import Home from './Home'
import { NavLink, Outlet } from 'react-router-dom'
// import Footer from '../layout/Footer'

function Chapters() {
    return (
        <>


            <div className='chapters'>
                <Home />
                <div className='chapter-list-wrapper'>
                    <div className='chapter-list-items'>
                        <NavLink to='' className="chapt">
                            <li>1. Victory upon Victory</li>
                        </NavLink>
                    </div>

                    <div className='chapter-list-items'>
                        <NavLink to='chapter2' className="chapt">
                            <li>2. Pasu</li>
                        </NavLink>
                    </div>
                    <div className='chapter-list-items'>
                        <li>3. Imran’s Family</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>4. Women</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>5. Unavu maravai</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>6. Kalnadaigal</li>
                    </div>
                </div>
                <Outlet />
            </div>

        </>
    )
}

export default Chapters