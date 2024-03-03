import React, { useContext } from "react";
import "./Sidebar.css";
import logo from "../Assets/quran-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import LanguageContext from "../context/LanguageContext";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SideBarContext from "../context/SideBarContext";


const StyledLinkButton = styled(NavLink)({
  textDecoration: "none",
  textAlign: "center",
  color: "#647288",
  width: '100%',
  fontSize: '12px',
  "&.active": {
    background: "rgb(237,239,242)",
    borderRadius: 5,
  },
});

function SideBar() {
  // const user = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const languageContext = useContext(LanguageContext);
  const modal = useContext(SideBarContext)


  // const { user } = useSelector((state) => state.authState);
  // const username = user?.name?.substring(0, 10) + "...";
  const userName = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { user: null };
  const username = userName?.user?.name?.substring(0, 10) + "...";


  const onLogout = () => {
    // Update redux state
    dispatch(logout());
    navigate("/");
  };

  const getFontFamily = () => {
    return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
  };

  return (
    <div className={`sidebar ${modal.sidebarOpen ? 'open' : 'closed'}`}>
      <div className="container">
        <div className="logo-container">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="" width="32px" height="32px" />
          </div>
          <div className="title-sidebar">
            <h4 style={{ fontFamily: getFontFamily() }}>{languageContext.language === 'Tamil' ? 'குர்ஆன்' : 'Quran drfazl'}</h4>
          </div>
        </div>

        <div className="menu-wrapper">
          <div className="menu-container">
            <StyledLinkButton to="/home">
              <li>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HomeRoundedIcon fontSize="small" />
                </div>
                <div className="list-title"  style={{ fontFamily: getFontFamily() }}>
                  {languageContext.language === 'Tamil' ? 'முகப்பு' : 'Home'}
                </div>
              </li>
            </StyledLinkButton>

            <StyledLinkButton to="/preface">
              <li>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FeedRoundedIcon fontSize="small" />
                </div>
                <div className="list-title" style={{ fontFamily: getFontFamily() }}>
                  {languageContext.language === 'Tamil' ? 'முன்னுரை' : 'Preface'}
                </div>
              </li>
            </StyledLinkButton>

            <StyledLinkButton to="/chapters">
              <li>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MenuBookRoundedIcon fontSize="small" />
                </div>
                <div className="list-title" style={{ fontFamily: getFontFamily() }}>
                  {languageContext.language === 'Tamil' ? 'அத்தியாயம்' : 'Chapter'}
                </div>
              </li>
            </StyledLinkButton>
            <StyledLinkButton to="/aboutTheBook">
              <li>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <StickyNote2RoundedIcon fontSize="small" />
                </div>
                <div className="list-title" style={{ fontFamily: getFontFamily() }}>
                  {languageContext.language === 'Tamil' ? 'அணிந்துரை' : 'About the book'}</div>
              </li>
            </StyledLinkButton>
          </div>

          <div className="user-container">
            {/* <li><div className='lang'>தமிழ் / English</div> <div className='toggle-btn'><img src={toggle} alt="" /></div></li>
                    <li><div className='theme'>Light / Dark</div> <div className='toggle-btn'><img src={toggle} alt="" /></div></li> */}
            <StyledLinkButton to="/settings">
              <li>
                <div className="list-icon"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SettingsRoundedIcon fontSize="small" />
                </div>
                <div className="list-title">Settings</div>
              </li>
            </StyledLinkButton>
            {/* <StyledLinkButton to="/"> */}
            <li className="li-logout">
              <div className="user-name">
                <div className="list-icon">
                  <AccountCircleRoundedIcon fontSize="small" style={{ color: '#647288' }} />
                </div>
                <p className="list-title">{ username || "" }</p>
              </div>
              <Link to="/" onClick={onLogout} className="list-icon">
                <LogoutRoundedIcon fontSize="small" style={{ color: '#647288' }}/>
              </Link>
            </li>

            {/* </StyledLinkButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
