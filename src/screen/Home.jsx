import React, { useContext } from 'react'
import FontContext from '../context/FontContext'
import Header from '../layout/Header';
import Prayer from '../Assets/menu-prayer.jpg';
import { styled } from "@mui/material";
import './home.css'
import LanguageContext from '../context/LanguageContext';
import { NavLink } from 'react-router-dom';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';


function AboutTheBook() {

  const context = useContext(FontContext);
  const languageContext = useContext(LanguageContext);
  const getFontFamily = () => {
    return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
  };

  const StyledLinkButton = styled(NavLink)({
    fontSize: '12px',
    width: '148px',
    height: '130px',
    paddingBottom: '28px',
    paddingTop: '28px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '12px',
    boxShadow: '0px 1px 4px 1px #00000014',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    "&.active": {
      background: "rgb(237,239,242)",
      borderRadius: 5,
    },
  });

  return (
    <>
      <section className='home-wrapper'>
        <div className='prayer-container'>
          {/* <p className='en-iraivane' style={{ fontFamily: getFontFamily() }}>என் இறைவனே!</p>
          <p className='pray' style={{ fontFamily: getFontFamily() }}>
            நீயே அளவற்ற அருளாளன்; நிகரற்ற
            இரக்கமுடையவன்; நீயே அகிலங்களின்
            அதிபதி; நீயே அறிவிப்பவன்; நீயே
            வழிகாட்டுபவன்; நீயே மன்னிப்பவன்;
            நீயே பிழை பொறுப்பவன்; நீயே
            எனக்காகப் பொறுப்பேற்றுக் கொள்பவன்.
            நான் உன்னை கொண்டே
            திருப்தியடைகிறேன். என்னை நீ
            நேர்வழியில் ஆக்குவாயாக.
          </p> */}
          <img src={Prayer} alt='Prayer' width="100%" height="100%" />
        </div>
        <div className='route-container'>
          <StyledLinkButton to="/chapters">
            <div className='icon-cont' style={{ backgroundColor: '#FFF2DF' }}>
              <MenuBookRoundedIcon fontSize="small" />
            </div>
            <div className="icon-name" style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
              {languageContext.language === 'Tamil' ? 'அத்தியாயம்' : 'Chapter'}
            </div>
          </StyledLinkButton>
          <StyledLinkButton to='/chapters/keywords' className='index-card'>
            <div className='icon-cont' style={{ backgroundColor: '#E3F3FF' }}>
              <FeedRoundedIcon fontSize="small" />
            </div>
            <div className="icon-name" style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
              {languageContext.language === 'Tamil' ? 'கலைச்சொல்' : 'Keywords'}
            </div>
          </StyledLinkButton>
          <StyledLinkButton to='/preface' className='index-card'>
            <div className='icon-cont' style={{ backgroundColor: '#F0F5F9' }}>
              <FeedRoundedIcon fontSize="small" />
            </div>
            <div className="icon-name" style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
              {languageContext.language === 'Tamil' ? 'முன்னுரை' : 'Preface'}
            </div>
          </StyledLinkButton>
          <StyledLinkButton to='/aboutTheBook' className='index-card'>
            <div className='icon-cont' style={{ backgroundColor: '#FFF1F1' }}>
              <StickyNote2RoundedIcon fontSize="small" />
            </div>
            <div className="icon-name" style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
              {languageContext.language === 'Tamil' ? 'அணிந்துரை' : 'About Quran'}
            </div>
          </StyledLinkButton>
        </div>
      </section>
    </>
  )
}

export default AboutTheBook