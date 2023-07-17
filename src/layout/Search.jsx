import { useContext, useState, useEffect, useMemo } from 'react';
import engQuranData from '../screen/eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import FontContext from '../context/FontContext';
import LanguageContext from '../context/LanguageContext';
import share1 from '../Assets/share1.svg';
import x_close from '../Assets/x_close.svg';
import search_refraction from '../Assets/search_refraction.svg';
import { Link, useNavigate } from 'react-router-dom';
import './search.css';

const Search = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [showScrollButton, setShowScrollButton] = useState(false);

  const navigate = useNavigate()
  const fontSizeContext = useContext(FontContext);
  const languageContext = useContext(LanguageContext);
  const data = languageContext.language === 'Tamil' ? tamQuranData : engQuranData;
  const chapters = data.chapters;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowScrollButton(window.scrollY > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  const handleClick = (number) => {
    const number1 = parseInt(number.split(".")[0]);
    setActiveTab(number1 - 1)
    console.log(number1 - 1)
    navigate('/Chapters') 
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsLoading(true);
  };

  const renderVerses = (chapter) => {

    const filteredVerses = chapter.verses.filter((verse) =>
      verse.number.includes(searchQuery) ||
      verse.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredVerses.length === 0) {
      return <p>No results found.</p>;
    }

    return filteredVerses.map((verse, index) => (
      <div className='verse-container' key={index}>
        <div className='verse-number'>
          <div className='verse-num' style={{ fontSize: `${fontSizeContext.fontSize}px` }}>
            {verse.number}
          </div>
          <div className='more-btn-wrapper'>
            <button
              className="more-btn"
              style={{ fontSize: `${fontSizeContext.fontSize}px` }}
              onClick={() => handleShareClick(verse.number, verse.text)}
            >
              <img src={share1} alt="" />
            </button>
          </div>
        </div>
        <div
          onClick={() => { handleClick(verse.number) }}
          className='verse-text'
          style={{ fontSize: `${fontSizeContext.fontSize}px` }}
          dangerouslySetInnerHTML={{ __html: highlightSearchQuery(verse.text) }}
        ></div>
      </div>
    ));
  };

  const handleShareClick = async (verseNumber, verseText) => {
    try {
      const shareData = {
        // title: `${chapterTitle}`,
        text: `குர்ஆன் \n \n${verseNumber}: ${verseText}`,
      };
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }

  const highlightSearchQuery = (text) => {
    if (searchQuery.trim() !== '') {
      const regex = new RegExp(searchQuery, 'gi');
      return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    }
    return text;
  };


  const filteredData = useMemo(() => {
    if (searchQuery) {
      return chapters.filter((chapter) => {
        const chapterTitleMatches = chapter.title.toLowerCase().includes(searchQuery.toLowerCase());
        const verses = chapter.verses.filter(
          (verse) =>
            verse.number.includes(searchQuery) ||
            verse.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return chapterTitleMatches || verses.length > 0;
      });
    }
    return [];
  }, [chapters, searchQuery]);

  useEffect(() => {
    setIsLoading(false);
  }, [filteredData]);



  return (
    <>
      <div className='s-wrapper'>
        <div className='s-header'>
          <div className='s-header-title'>
            <h3 className='s-h-title'>Search</h3>
          </div>
          <div className='s-header-closebtn'>
            <Link to='/Chapters'>
              <button>
                <img src={x_close} alt='' />
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
            onChange={handleSearch}
          />
        </div>
        <div className='verse-wrapper' style={{ marginTop: "56px" }}>
          {isLoading ? (
            <div class="spinner"></div>
          ) : filteredData.length > 0 ? (
            filteredData.map((chapter) => (
              <div key={chapter.number}>
                {renderVerses(chapter)}
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
        {/* {showScrollButton && (
          <button className="scroll-top-button" onClick={handleScrollToTop}>
            <img src={x_close} alt='' />
          </button>
        )} */}
      </div>
    </>
  );
};

export default Search;