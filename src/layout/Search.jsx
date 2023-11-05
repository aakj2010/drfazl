import { useContext, useState, useEffect, useMemo } from 'react';
import engQuranData from '../screen/eng-quran.json';
import tamQuranData from '../Content/tam-quran.json';
import tamKalaiSorkalData from '../Content/tam-Kalaisol.json';
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
  const [showAllResults, setShowAllResults] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState('quran'); // 'quran' or 'kalaisorkal'
  const [data, setData] = useState(tamQuranData)
  const navigate = useNavigate();
  const fontSizeContext = useContext(FontContext);
  const languageContext = useContext(LanguageContext);
  const [selectedLanguage] = useState(languageContext.language);

  useEffect(() => {
    switch (selectedLanguage) {
      case 'Tamil':
        switch (selectedDataset) {
          case 'kalaisorkal':
            setData(tamKalaiSorkalData);
            break;
          case 'quran':
            setData(tamQuranData);
            break;
          default:
            setData(tamQuranData);
            break;
        }
        break;
      case 'English':
        switch (selectedDataset) {
          case 'kalaisorkal':
            setData(engQuranData);
            break;
          case 'quran':
            setData(engQuranData);
            break;
          default:
            setData(engQuranData);
            break;
        }
        break;
      default:
        setData(tamKalaiSorkalData); // Set a default value if none of the cases match
    }

  }, [selectedDataset, selectedLanguage])

  let chapters = data.chapters || [];

  const handleClick = (number) => {
    const number1 = parseInt(number.split('.')[0]);
    setActiveTab(number1 - 1);
    navigate('/Chapters');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsLoading(true);
  }

  const renderVerses = (chapter) => {
    if (chapter) {
      if (selectedDataset) {
        if (chapter.verses && searchQuery.trim() !== "") {
          const filteredVerses = chapter.verses.filter(
            (verse) =>
              verse.number.includes(searchQuery) ||
              verse.text.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredVerses.length === 0) {
            return <p>No results found.</p>;
          }

          return filteredVerses.map((verse, index) => (
            <div className="verse-container" key={index}>
              <div className="verse-number">
                <div className="verse-num" style={{ fontSize: `${fontSizeContext.fontSize}px` }}>
                  {verse.number}
                </div>
                <div className="more-btn-wrapper">
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
                onClick={() => {
                  handleClick(verse.number);
                }}
                className="verse-text"
                style={{ fontSize: `${fontSizeContext.fontSize}px` }}
                dangerouslySetInnerHTML={{ __html: highlightSearchQuery(verse.text) }}
              ></div>
            </div>
          ));
        } else {
          return <p>Please enter a search query to see results.</p>;
        }
      }
    }
    return <p>Chapter not found.</p>;
  };


  const handleShareClick = async (verseNumber, verseText) => {
    try {
      const shareData = {
        text: `குர்ஆன் \n \n${verseNumber}: ${verseText}`,
      };
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const highlightSearchQuery = (text) => {
    if (searchQuery.trim() !== '') {
      const regex = new RegExp(searchQuery, 'gi');
      return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    }
    return text;
  };

  const filteredData = useMemo(() => {
    if (searchQuery && chapters && chapters.length > 0) {
      return chapters.filter((chapter) => {
        if (selectedDataset === "quran") {
          const chapterTitleMatches =
            chapter.title && chapter.title.toLowerCase().includes(searchQuery.toLowerCase());
          const verses =
            chapter.verses &&
            chapter.verses.filter(
              (verse) =>
                verse.number &&
                verse.text &&
                (verse.number.includes(searchQuery) ||
                  verse.text.toLowerCase().includes(searchQuery.toLowerCase()))
            );
          return chapterTitleMatches || (verses && verses.length > 0);
        } else if (selectedDataset === "kalaisorkal") {
          const kalai =
            chapter.verses &&
            chapter.verses.filter(
              (verse) =>
                verse.number &&
                verse.text &&
                (verse.number.includes(searchQuery) ||
                  verse.text.toLowerCase().includes(searchQuery.toLowerCase()))
            );
          return (kalai && kalai.length > 0);
        }
        return false;
      });
    }
    return [];
  }, [chapters, searchQuery, selectedDataset]);

  useEffect(() => {
    setIsLoading(false);
  });

  const handleShowAllResults = () => {
    setShowAllResults(true);
  };

  const renderResults = () => {
    if (isLoading) {
      return <div className="spinner"></div>;
    } else if (filteredData.length > 0) {
      let resultsToRender = showAllResults ? filteredData : filteredData.slice(0, 1);
      return resultsToRender.map((chapter) => (
        <div key={chapter.number}>{renderVerses(chapter)}</div>
      ));
    } else {
      return <p>No results found.</p>;
    }
  };

  return (
    <>
      <div className="s-wrapper">
        <div className="s-header">
          <div className="s-header-title">
            <h3 className="s-h-title">Search</h3>
          </div>
          <div className="s-header-closebtn">
            <Link to="/Chapters">
              <button>
                <img src={x_close} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="cl-search">
          <img src={search_refraction} alt="" />
          <input
            type="text"
            placeholder={selectedLanguage === "English" ? "Search words" : "வார்த்தை அல்லது அத்தியாயம்"}
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="language-switcher">
          <button
            className={selectedDataset === 'quran' ? 'active-btn' : ''}
            onClick={() => setSelectedDataset('quran')}
          >
            {selectedLanguage === "English" ? "Quran" : "குர்ஆன்"}
          </button>
          <button
            className={selectedDataset === 'kalaisorkal' ? 'active-btn' : ''}
            onClick={() => setSelectedDataset('kalaisorkal')}
          >
            {selectedLanguage === "English" ? "KalaiSorkal" : "கலைச்சொற்கள்"}
          </button>
        </div>
        <div className="verse-wrapper" style={{ marginTop: '56px' }}>
          {renderResults()}
          {!showAllResults && filteredData.length > 2 && (
            <button className="show-more-btn" onClick={handleShowAllResults}>
              Show More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
