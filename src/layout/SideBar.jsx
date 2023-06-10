import React from 'react'
import './Sidebar.css'
import logo from '../Assets/logo.svg'
import chapter from '../Assets/s-chapter.svg'
import abook from '../Assets/aboutbook.svg'
import home from '../Assets/home.svg'
import toggle from '../Assets/togglebtn.svg'
import settings from '../Assets/settings.svg'
import account from '../Assets/account.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { logoutReducer } from '../Auth/reducers/authSlice';
import { logout } from '../Auth/actions/userActions'


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

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const name = useSelector(state => state.auth?.user?.name);
    const username = name?.replace("@gmail.com", "");

    const onLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        // Update redux state
        dispatch(logout());
        dispatch(logoutReducer());
        // Navigate to home page
        navigate('/');
    }


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
                            <span ><img src={home} alt="" className='list-icon' /></span>
                            <span className='list-title'>Home</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/preface">
                        <li>
                            <span ><img src={abook} alt="" className='list-icon' /></span>
                            <span className='list-title'>Preface</span>
                        </li>
                    </StyledLinkButton>

                    <StyledLinkButton to="/chapters">
                        <li>
                            <span ><img src={chapter} alt="" className='list-icon' /></span>
                            <span className='list-title'>Chapters</span>
                        </li>
                    </StyledLinkButton>
                    <StyledLinkButton to="/aboutTheBook">
                        <li>
                            <span><img src={abook} alt="" className='list-icon' /></span>
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
                        <span className='list-icon'><img src={account} alt="" /></span>
                        <button onClick={onLogout} className='list-title'>{username}</button>
                    </li>
                    {/* </StyledLinkButton> */}
                </div>

            </div>
        </div>
    )
}

export default SideBar