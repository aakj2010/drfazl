import React from 'react'
import './Sidebar.css'
import logo from '../Assets/logo.svg'
import description from '../Assets/description.svg'
import menu from '../Assets/menu_book.svg'
import home from '../Assets/home.svg'
import book from '../Assets/aboutbook.svg'
import toggle from '../Assets/togglebtn.svg'
import settings from '../Assets/settings.svg'
import account from '../Assets/account.svg'
import { NavLink } from 'react-router-dom'


function SideBar() {
    return (
        <div className='sidebar'>
            <div className='logo-container'>
                <div className='logo'>
                    <img src={logo} alt="" width="50px" height="50px" />
                </div>
                <div className="title-sidebar">
                    <h4>Quran</h4>
                    <h6>drfazl</h6>
                </div>
            </div>

            <div className='menu-wrapper'>
                <div className='menu-container'>
                    <NavLink to="/home">
                        <li><span className='list-icon'>
                            <img src={home} alt="" /></span><span className='list-title'>Home</span>
                        </li>
                    </NavLink>

                    <NavLink to="/Preface">
                        <li><span className='list-icon'>
                            <img src={description} alt="" /></span><span className='list-title'>Preface</span>
                        </li>
                    </NavLink>

                    <NavLink to="/Chapters">
                        <li><span className='list-icon'>
                            <img src={menu} alt="" /></span><span className='list-title'>Chapters</span>
                        </li>
                    </NavLink>
                    <NavLink to="/AboutTheBook">
                        <li><span className='list-icon'>
                            <img src={book} alt="" /></span><span className='list-title'>About the book</span>
                        </li>
                    </NavLink>
                </div>

                <div className='settings-container'>
                    {/* <li><span className='lang'>தமிழ் / English</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li> */}
                    <li><span className='theme'>Light / Dark</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li>
                    <li><span className='list-icon'><img src={settings} alt="" /></span><span className='list-title'>Settings</span> </li>
                    <li><span className='list-icon'><img src={account} alt="" /></span><span className='list-title'>8668071426</span> </li>
                </div>

            </div>
        </div>
    )
}

export default SideBar