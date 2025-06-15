import './footer.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import SideBarContext from '../context/SideBarContext'
import LanguageContext from '../context/LanguageContext';
import { styled } from "@mui/material";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';


const StyledLinkButton = styled(NavLink)({
    textDecoration: "none",
    textAlign: "center",
    color: '#8496b1',
    width: 'max-content',
    "&.active": {
    //   color: "#33578d",
    //   background: "rgb(237,239,242)",
    //   borderRadius: 5,
    },
  });
function Footer() {
    let modal = useContext(SideBarContext);
    const languageContext = useContext(LanguageContext);

    const getFontFamily = () => {
      return languageContext.language === "Tamil" ? "system-ui" : "Nunito, sans-serif"
    };
    return (
        <>
            <div className={!modal.sidebarOpen ? "icons-wrapper" : "footer"} >
                <StyledLinkButton to="" className='icon-with-title'>
                    <div className='icon-container'>
                    <MenuBookRoundedIcon />
                    </div>
                    <div className='icon-title'  style={{ fontFamily: getFontFamily() }}>
                        {languageContext.language === 'Tamil' ? 'அத்தியாயம்' : 'Chapter'}
                    </div>
                </StyledLinkButton>
                <StyledLinkButton to="keywords" className='icon-with-title'>
                    <div className='icon-container'>
                        <StarRateRoundedIcon />
                    </div>
                    <div className='icon-title'  style={{ fontFamily: getFontFamily() }}>
                        {languageContext.language === 'Tamil' ? 'கலைச்சொற்கள்' : 'keywords'}
                    </div>
                </StyledLinkButton>

                {/* <NavLink to="bookmarks" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={bookmark} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>
                        {languageContext.language === 'Tamil' ? 'பிற்சேர்க்கை' : 'Bookmarks'}
                    </div>
                </NavLink> */}
                {/* <NavLink to="notes" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={notes} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Notes</div>
                </NavLink> */}

                <StyledLinkButton to="glossary" className='icon-with-title' >
                    <div className='icon-container'>
                        <AssignmentRoundedIcon />
                    </div>
                    <p className='icon-title'  style={{ fontFamily: getFontFamily() }}>
                    {languageContext.language === 'Tamil' ? 'பிற்சேர்க்கை' : 'Glossary'}</p>
                </StyledLinkButton>
            </div>
        </>
    )
}

export default Footer