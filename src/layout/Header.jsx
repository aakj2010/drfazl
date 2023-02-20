import React, { useState } from 'react'
import './Header.css'
import search from '../Assets/search.svg'
import help from '../Assets/help.svg'
import menu from '../Assets/menu.svg'
import { useLocation } from 'react-router-dom'
import SideBar from './SideBar'


function Header() {
    const location = useLocation()
    const result = location.pathname.split('/')
    const title = result[2] ? result[2].charAt(0).toUpperCase() + result[2].slice(1) : result[1].charAt(0).toUpperCase() + result[1].slice(1)

    const [open, setOpen] = useState(false)

    const showSidebar = () => {
        setOpen(!open)
    }

    return (
        <header className='m-header-wrapper'>
            <div className='menu-title'>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn' onClick={showSidebar}>
                        <img src={menu} alt="menu" />
                        {
                            open ? (
                                <SideBar />
                            ) : null
                        }
                    </button>
                </div>
                <div className='title'>
                    {title}
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