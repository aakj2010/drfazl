import React, { useContext, useState } from 'react';
import './chapterlist.css';
import x_close from '../Assets/x_close.svg';
import search_refraction from '../Assets/search_refraction.svg';
import { Link, useNavigate } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import engQuranData from '../screen/eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import FontContext from '../context/FontContext';

const ChapterList = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  let fontSizeContext = useContext(FontContext);
  const Context = useContext(LanguageContext);
  const navigate = useNavigate()

  const getFontFamily = () => {
    return Context.language === 'Tamil' ? 'mukta-font ' : 'nunito-font';
  };

  const data = Context.language === 'Tamil' ? tamQuranData : engQuranData;
  const chapters = data.chapters;
  let lastNumbers = [];

  // Handle search query change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter chapters based on search query
  const filteredChapters = chapters.filter((chapter) => {
    const chapterNumber = chapter.number.toString();
    const query = searchQuery.toLowerCase();

    return (
      chapter.title.toLowerCase().includes(query) ||
      chapterNumber.includes(query)
    );
  });

  // Access the last number value of each verse
  filteredChapters.forEach((chapter) => {
    const verses = chapter.verses;
    if (verses.length > 0) {
      const lastVerse = verses[verses.length - 1];
      const lastNumber = lastVerse.number.split('.').pop();
      lastNumbers.push(lastNumber);
    }
  });

  if (!Array.isArray(chapters)) {
    console.error('Data is not an array:', chapters);
    return null; // or render an error message
  }
  const handleClick = (index) => {
    setActiveTab(index)
    navigate('/chapters')
  }

  return (
    <div className='cl-wrapper'>
      <div className='cl-header'>
        <div className='cl-header-title'>
          <p className={`cl-h-title`}
            style={{ fontSize: `${fontSizeContext.fontSize}px` }}
          >
            {Context.language === 'Tamil' ? 'அத்தியாயங்கள்' : 'Chapter list'}
          </p>
          <h4 className='cl-header-title-length'
          >{filteredChapters.length}</h4>

        </div>
        <div className='cl-header-closebtn'>
          <Link to='/chapters'>
            <button>
              <img src={x_close} alt='close-button' />
            </button>
          </Link>
        </div>
      </div>
      <div className='cl-search'>
        <img src={search_refraction} alt="" />
        <input
          type='text'
          placeholder='Search chapters'
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className='cl-list-item-wrapper'>
        {React.Children.toArray(
          filteredChapters.map((chapter, index) => (
            <div className='cl-list-item' key={index} onClick={() => { handleClick(index) }}>
              <p
                className={`cl-list-item-title ${Context.language === 'Tamil' ? 'mukta-font' : 'nunito-font '}`}
                style={{ fontSize: `${fontSizeContext.fontSize}px` }}
              >
                {`${chapter.number}. ${chapter.title}`}
              </p>
              <p
                className='cl-list-item-length'
                style={{ fontSize: `${fontSizeContext.fontSize}px` }}
              >
                {lastNumbers[index]}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChapterList;
