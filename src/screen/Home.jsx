import React, { useContext } from "react";
import FontContext from "../context/FontContext";
import Prayer from "../Assets/menu-prayer.jpg";
import { styled } from "@mui/material";
import "./home.css";
import LanguageContext from "../context/LanguageContext";
import { Link, NavLink } from "react-router-dom";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

function AboutTheBook() {
  const context = useContext(FontContext);
  const languageContext = useContext(LanguageContext);
  const getFontFamily = () => {
    return languageContext.language === "Tamil"
      ? "system-ui"
      : "Nunito, sans-serif";
  };

  const StyledLinkButton = styled(NavLink)({
    fontSize: "12px",
    width: "50%",
    height: "130px",
    paddingBottom: "28px",
    paddingTop: "28px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "12px",
    boxShadow: "0px 1px 4px 1px #00000014",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&.active": {
      background: "rgb(237,239,242)",
      borderRadius: 5,
    },
  });

  return (
    <section className="home-wrapper">
      <div className="prayer-container">
        <img src={Prayer} alt="Prayer" width="100%" height="100%" />
      </div>
      <div className="route-container">
        <div className="divisions">
          <Link to="/preface" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#FFF2DF" }}>
              <FeedRoundedIcon fontSize="small" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil" ? "முன்னுரை" : "Preface"}
            </div>
          </Link>
          <Link to="/chapters" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#eff9da" }}>
              <MenuBookRoundedIcon fontSize="small" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil" ? "அத்தியாயம்" : "Chapter"}
            </div>
          </Link>
        </div>
        <div className="divisions">
          <Link to="/chapters/keywords" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#E3F3FF" }}>
              <StarRateRoundedIcon fontSize="medium" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil" ? "கலைச்சொல்" : "Keywords"}
            </div>
          </Link>

          <Link to="/aboutTheBook" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#FFF2DF" }}>
              <StickyNote2RoundedIcon fontSize="small" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil"
                ? "அணிந்துரை"
                : "About Quran"}
            </div>
          </Link>
        </div>
        <div className="divisions">
          <Link to="/chapters/glossary" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#ffefed" }}>
              <AssignmentRoundedIcon fontSize="small" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil"
                ? "பிற்சேர்க்கை"
                : "Glossary"}
            </div>
          </Link>

          <Link to="/settings" className="index-card">
            <div className="icon-cont" style={{ backgroundColor: "#e6edf3" }}>
              <SettingsRoundedIcon fontSize="small" />
            </div>
            <div
              className="icon-name"
              style={{
                fontFamily: getFontFamily(),
                fontSize: `${context.fontSize}px`,
              }}
            >
              {languageContext.language === "Tamil" ? "அமைப்புகள்" : "Settings"}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutTheBook;
