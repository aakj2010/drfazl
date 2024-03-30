import React, { useContext } from 'react';
import './keywords.css';
import Tamil_Kalaisol from '../Content/tam-Kalaisol.json';
import htmlToReactParser from 'html-react-parser';
import FontContext from '../context/FontContext';
import { useNavigate } from 'react-router-dom';

function KeyWords({ setActiveTab }) {
  const context = useContext(FontContext);
  const navigate = useNavigate();
  const data = Tamil_Kalaisol;
  const chapters = data.chapters || [];
  const handleClick = (index, number) => {
    setActiveTab(index)
    navigate(`/chapters#${number}`);
  }

  return (
    <div className='keywords-wrapper'>
      {chapters.map((chapter) => (
        <div className='keyword-container' key={chapter.number}>
          {chapter.verses.map((item, index) => (
            <div className='kw-verse' id={index + 1} key={item.number}
              onClick={() => { handleClick(item.Link - 1, item.link2) }}
            >
              <div className='kw-number-icon'>
                <div className='kw-serial'>{item.number}</div>
              </div>

              <div className='kw-para' style={{
                fontSize: `${context.fontSize}px`
              }}>
                {htmlToReactParser(item.text)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default KeyWords;

