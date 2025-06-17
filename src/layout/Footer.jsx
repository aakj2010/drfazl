import "./footer.css";
import { useNavigate, useMatch } from "react-router-dom";
import { useContext } from "react";
import SideBarContext from "../context/SideBarContext";
import LanguageContext from "../context/LanguageContext";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

function Footer() {
  const navigate = useNavigate();
  const matchChapters = useMatch("/chapters");
  const matchKeywords = useMatch("/chapters/keywords");
  const matchGlossary = useMatch("/chapters/glossary");
  let modal = useContext(SideBarContext);
  const languageContext = useContext(LanguageContext);

  const getFontFamily = () => {
    return languageContext.language === "Tamil"
      ? "system-ui"
      : "Nunito, sans-serif";
  };

  return (
    <div className={`${!modal.sidebarOpen ? "icons-wrapper" : "footer"} max-w-2xl mx-auto w-full`}>
      <div
        className={`pt-2 ${
          matchChapters && !matchKeywords && !matchGlossary
            ? "border-t-4 border-t-[#33578d] text-[#33578d]"
            : "!text-[#8496b1] border-t-4 border-t-transparent cursor-pointer"
        }`}
        onClick={() => navigate("/chapters")}
      >
        <div className="flex flex-col justify-center items-center gap-1 px-5 py-0">
          <MenuBookRoundedIcon />
        </div>
        <div
          className="h-3.5 not-italic font-semibold text-[10px] leading-[14px] flex items-center justify-center"
          style={{ fontFamily: getFontFamily() }}
        >
          {languageContext.language === "Tamil" ? "அத்தியாயம்" : "Chapter"}
        </div>
      </div>
      <div
        className={`pt-2 ${
          matchKeywords
            ? "border-t-4 border-t-[#33578d] !text-[#33578d]"
            : "text-[#8496b1] border-t-4 border-t-transparent cursor-pointer"
        }`}
        onClick={() => navigate("/chapters/keywords")}
      >
        <div className="flex flex-col justify-center items-center gap-1 px-5 py-0">
          <StarRateRoundedIcon />
        </div>
        <div
          className="h-3.5 not-italic font-semibold text-[10px] leading-[14px] flex items-center justify-center"
          style={{ fontFamily: getFontFamily() }}
        >
          {languageContext.language === "Tamil" ? "கலைச்சொற்கள்" : "keywords"}
        </div>
      </div>
      <div
        className={`pt-2 ${
          matchGlossary
            ? "border-t-4 border-t-[#33578d] text-[#33578d]"
            : "text-[#8496b1] border-t-4 border-t-transparent cursor-pointer"
        }`}
        onClick={() => navigate("/chapters/glossary")}
      >
        <div className="flex flex-col justify-center items-center gap-1 px-5 py-0">
          <AssignmentRoundedIcon />
        </div>
        <p
          className="h-3.5 not-italic font-semibold text-[10px] leading-[14px] flex items-center justify-center"
          style={{ fontFamily: getFontFamily() }}
        >
          {languageContext.language === "Tamil" ? "பிற்சேர்க்கை" : "Glossary"}
        </p>
      </div>
    </div>
  );
}

export default Footer;
