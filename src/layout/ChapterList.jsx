import React, { useContext } from 'react';
import './chapterlist.css';
import x_close from '../Assets/x_close.svg';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import engQuranData from '../screen/eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import FontContext from '../context/FontContext';

const ChapterList = () => {
    let fontSizeContext = useContext(FontContext)
  const Context = useContext(LanguageContext);
  const data = Context.language === 'Tamil' ? tamQuranData : engQuranData;
  const chapters = data.chapters;

  if (!Array.isArray(chapters)) {
    console.error('Data is not an array:', chapters);
    return null; // or render an error message
  }

  return (
    <div className='cl-wrapper'>
      <div className='cl-header'>
        <div className='cl-header-title'>
          <h3 className='' >Chapter list</h3>
          <h3 className='cl-header-title-length'>{chapters.length}</h3>
        </div>
        <div className='cl-header-closebtn'>
          <Link to='/Chapters'>
            <button>
              <img src={x_close} alt='' />
            </button>
          </Link>
        </div>
      </div>
      <div className='cl-list-item-wrapper'>
        {chapters.map((chapter, index) => (
          <div className='cl-list-item' key={index}>
            <p className='cl-list-item-title' style={{ fontSize: `${fontSizeContext.fontSize}px` }}>
              {`${index + 1}. ${chapter.title}`}
            </p>
            <p className='cl-list-item-length'style={{ fontSize: `${fontSizeContext.fontSize}px` }}>{chapter.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
