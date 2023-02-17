import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Quran() {
    return (
        <>
         <div className='chapters'>
                <div className='img-container' >
                    <div class="bottom-left">Quran</div>
                </div>
                <div className='chapter-list-wrapper'>
                    <div className='chapter-list-items'>
                        <NavLink to='' className="list-items">1. Victory upon Victory</NavLink>
                        <NavLink to='2' className="list-items" >2. Pasu </NavLink>
                        <NavLink to='3' className="list-items">3. Imran’s Family</NavLink>
                        <NavLink to='4' className="list-items">4. Women</NavLink>
                        <NavLink to='5' className="list-items">5. Unavu maravai</NavLink>
                        <NavLink to='6' className="list-items">6. Kalnadaigal</NavLink>
                    </div>
                </div>
                <Outlet />
            </div>
        </>

    )
}

export default Quran