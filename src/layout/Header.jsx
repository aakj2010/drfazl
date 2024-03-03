import React, { useContext } from 'react'
import './Header.css'
import search from '../Assets/search.svg'
import menu from '../Assets/menu.svg'
import { Link, useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import SideBarContext from '../context/SideBarContext'
// import LanguageContext from '../context/LanguageContext'


function Header() {
    let SideBarcontext = useContext(SideBarContext);
    // const languageContext = useContext(LanguageContext);

    const location = useLocation();
    const result = location.pathname.split('/')
    const title = result[2] ? result[2].charAt(0).toUpperCase() + result[2].slice(1) : result[1].charAt(0).toUpperCase() + result[1].slice(1);

    return (
        <>
            <header className='m-header-wrapper'>
                <div className='menu-title'>
                    <div className='menu-btn-wrapper'>
                        <button className='menu-btn' onClick={SideBarcontext.toggleSidebar}>
                            <img src={menu} alt="menu" />
                            {
                                SideBarcontext.sidebarOpen ? (
                                    <SideBar />
                                ) : null
                            }
                        </button>
                    </div>
                    <div className=''>
                        {title === 'Chapters' ? (
                            <div className='title'>
                                {title}
                                <Link to='chapter-list'
                                    className='cl-header-length'>
                                    114
                                </Link>
                            </div>
                        ) : (
                            <div className='title'>{title}</div>
                        )}
                    </div>

                </div>

                <div className='help-with-search'>
                    {/* <div className='menu-btn-wrapper'>
                        <button className='menu-btn'>
                            <img src={help} alt="help" />
                        </button>
                    </div> */}
                    <div className='menu-btn-wrapper'>
                        <Link to='search'>
                            <button className='menu-btn' 
                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img src={search} alt="search" />
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header