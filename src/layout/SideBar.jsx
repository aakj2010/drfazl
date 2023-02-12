import React from 'react'
import './Sidebar.css'
import logo from '../Assets/logo.svg'
import description from '../Assets/description.svg'
import menu from '../Assets/menu_book.svg'
import star from '../Assets/star1.svg'
import article from '../Assets/article.svg'
import glossary from '../Assets/format_list.svg'
import toggle from '../Assets/togglebtn.svg'
import settings from '../Assets/settings.svg'
import account from '../Assets/account.svg'
// import ToggleContext from '../context/ToggleContext'
// import { Link, NavLink } from 'react-router-dom'
// const context = ToggleContext()
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
                    <li><span className='list-icon'><img src={description} alt="" /></span><span className='list-title'>Preface</span> </li>
                    <li><span className='list-icon'><img src={menu} alt="" /></span><span className='list-title'>Chapters</span> </li>
                    <li><span className='list-icon'><img src={star} alt="" /></span><span className='list-title'>Keywords</span> </li>
                    <li><span className='list-icon'><img src={article} alt="" /></span><span className='list-title fs-12'>About Translation</span> </li>
                    <li><span className='list-icon'><img src={glossary} alt="" /></span><span className='list-title'>Glossary</span> </li>

                </div>

                <div className='settings-container'>
                    <li><span className='lang'>தமிழ் / English</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li>
                    <li><span className='theme'>Light / Dark</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li>
                    <li><span className='list-icon'><img src={settings} alt="" /></span><span className='list-title'>Settings</span> </li>
                    <li><span className='list-icon'><img src={account} alt="" /></span><span className='list-title'>8668071426</span> </li>
                </div>

            </div>
        </div>
    )
}

export default SideBar