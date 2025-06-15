import React, { useContext, useEffect, useRef } from 'react';
import LanguageContext from '../context/LanguageContext';

const Tab = (props) => {
  const languageContext = useContext(LanguageContext);
  const tabRef = useRef(null);
  const hasScrolledIntoView = useRef(false);

  const getFontFamily = () => {
    return languageContext.language === "Tamil" ? "system-ui" : "Nunito, sans-serif"
  };
  useEffect(() => {
    // Timeout is kept to allow rendering to settle before scrolling
    const timeoutId = setTimeout(() => {
      if (props.isActive && tabRef.current && !hasScrolledIntoView.current) {
        tabRef.current.classList.add('scroll-margin-left');
        tabRef.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
        hasScrolledIntoView.current = true;

        // Remove the temporary class after the scroll animation
        setTimeout(() => {
          tabRef.current.classList.remove('scroll-margin-left');
        }, 500); // Adjust this timeout as needed
      }
    }, 3000);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
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