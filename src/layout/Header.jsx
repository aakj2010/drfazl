import React from 'react'
import './Header.css'
import search from '../Assets/search.svg'
import help from '../Assets/help.svg'
import menu from '../Assets/menu.svg'
// import ToggleContext from '../context/ToggleContext'
// import { useLocation } from 'react-router-dom'


function Header() {

    // let context = useContext(ToggleContext)

    // const location = useLocation()
    // const title = location.pathname
    // console.log(location.pathname)

    return (
        <header className='m-header-wrapper'>
            <div className='menu-title'>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn' >
                        <img src={menu} alt="menu"/>
                    </button>
                </div>
                <div className='title'>
                    <button>
                        Chapter
                    </button>
                </div>
            </div>

            <div className='help-with-search'>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn'>
                        <img src={help} alt="help" />
                    </button>
                </div>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn'>
                        <img src={search} alt="search" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header