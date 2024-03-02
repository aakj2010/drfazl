import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Tab = (props) => {
  const languageContext = useContext(LanguageContext);

  const getFontFamily = () => {
    return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
  };
  return (
    <div
      className={`tab ${props.isActive ? 'active' : ''}`}
      onClick={props.onClick}
      style={{ fontFamily: getFontFamily() }}
    >
      {props.label}
    </div>
  );
}

export default Tab;