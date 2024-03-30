import React, { useContext } from 'react';
import './keywords.css';
import Tamil_Kalaisol from '../Content/tam-Kalaisol.json';
import htmlToReactParser from 'html-react-parser';
import FontContext from '../context/FontContext';

function KeyWords() {
  const context = useContext(FontContext);
  const data = Tamil_Kalaisol;
  const chapters = data.chapters || [];

  return (
    <div className='keywords-wrapper'>
      {chapters.map((chapter) => (
        <div className='keyword-container' key={chapter.number}>
          {chapter.verses.map((item) => (
            <div className='kw-verse' key={item.number}>
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

