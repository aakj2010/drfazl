import React from 'react'
import './Sidebar.css'
import logo from '../Assets/logo.svg'
import chapter1 from '../Assets/chapter1.svg'
import preface from '../Assets/preface.svg'
import home from '../Assets/home.svg'
import logout1 from '../Assets/logout1.svg'
import settings from '../Assets/settings.svg'
import account1 from '../Assets/account1.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'


const StyledLinkButton = styled(NavLink)({
    textDecoration: 'none',
    textAlign: 'center',
    color: '#5854c9',
    "&.active": {
        color: '#5854c9',
        background: 'rgba(88, 84, 201, 0.1)',
        borderRadius: 5
    }
})

function SideBar() {
    // const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, user } = useSelector(state => state.authState)
    const username = user?.name?.substring(0, 10) + "...";
    
    const onLogout = () => {
        // Update redux state
        dispatch(logout());
        navigate('/');
    }


    return (
        <div className='sidebar'>
            <div className='logo-container'>
                <div className='logo'>
                    <img src={logo} alt="" width="50px" height="50px" />
                </div>
                <div className="title-sidebar">
                    <h4>Quran drfazl</h4>
                </div>
            </div>

            <div className='menu-wrapper'>
                <div className='menu-container'>
                    <StyledLinkButton to="/home">
                        <li>
                            <span ><img src={home} alt="" className='list-icon' /></span>
                            <span className='list-title'>Home</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/preface">
                        <li>
                            <span ><img src={preface} alt="" className='list-icon' /></span>
                            <span className='list-title'>Preface</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/chapters">
                        <li>
                            <span ><img src={chapter1} alt="" className='list-icon' /></span>
                            <span className='list-title'>Chapters</span>
                        </li>
                    </StyledLinkButton>
                    <StyledLinkButton to="/aboutTheBook">
                        <li>
                            <span><img src={preface} alt="" className='list-icon' /></span>
                            <span className='list-title'>About the book</span>
                        </li>
                    </StyledLinkButton>
                </div>

                <div className='settings-container'>
                    {/* <li><span className='lang'>தமிழ் / English</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li>
                    <li><span className='theme'>Light / Dark</span> <span className='toggle-btn'><img src={toggle} alt="" /></span></li> */}
                    <StyledLinkButton to="/settings">
                        <li>
                            <span className='list-icon'><img src={settings} alt="" /></span>
                            <span className='list-title'>Settings</span>
                        </li>
                    </StyledLinkButton>
                    {/* <StyledLinkButton to="/"> */}
                    <li className='li-logout'>
                        <div className='user-name'>
                            <span className='list-icon'><img src={account1} alt="" /></span>
                            <span className='list-title'>{username || ""}</span>
                        </div>
                        <button onClick={onLogout} className='list-icon'><img src={logout1} alt="" /></button>
                    </li>

                    {/* </StyledLinkButton> */}
                </div>

            </div>
        </div>
    )
}

export default SideBar