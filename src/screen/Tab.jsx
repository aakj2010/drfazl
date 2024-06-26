import React, { useContext, useEffect, useRef } from 'react';
import LanguageContext from '../context/LanguageContext';

const Tab = (props) => {
  const languageContext = useContext(LanguageContext);
  const tabRef = useRef(null);
  const hasScrolledIntoView = useRef(false);

  const getFontFamily = () => {
    return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
  };
  useEffect(() => {
    if (props.isActive && tabRef.current && !hasScrolledIntoView.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      hasScrolledIntoView.current = true;
    }
  }, [props.isActive]);
  
  return (
    <div
      className={`tab ${props.isActive ? 'active' : ''}`}
      onClick={props.onClick}
      style={{ fontFamily: getFontFamily() }}
      id={props.label}
      ref={tabRef}
    >
      {props.label}
    </div>
  );
}

export default Tab;