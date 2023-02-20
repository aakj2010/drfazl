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
import { styled } from '@mui/material'


const StyledLinkButton = styled(NavLink)({
    textDecoration: 'none',
    textAlign: 'center',
    color: '#fff',
    "&.active": {
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5
    }
})

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
                    <StyledLinkButton to="/home">
                        <li>
                            <span className='list-icon'><img src={home} alt="" /></span>
                            <span className='list-title'>Home</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/preface">
                        <li>
                            <span className='list-icon'><img src={description} alt="" /></span>
                            <span className='list-title'>Preface</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/chapters">
                        <li>
                            <span className='list-icon'><img src={menu} alt="" /></span>
                            <span className='list-title'>Chapters</span>
                        </li>
                    </StyledLinkButton>
                    <StyledLinkButton to="/aboutthebook">
                        <li>
                            <span className='list-icon'><img src={book} alt="" /></span>
                            <span className='list-title'>About the book</span>
                        </li>
                    </StyledLinkButton>
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