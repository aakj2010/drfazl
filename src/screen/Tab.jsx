import React, { useContext, useEffect, useRef, useState } from 'react';
import LanguageContext from '../context/LanguageContext';

const Tab = React.memo((props) => {
  const languageContext = useContext(LanguageContext);
  const tabRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const getFontFamily = () => {
    return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => {
      if (tabRef.current) {
        observer.unobserve(tabRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (props.isActive && tabRef.current && !isVisible) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }, [props.isActive, isVisible]);

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
});

export default Tab;
