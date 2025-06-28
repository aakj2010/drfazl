import { useState, useEffect, useContext } from 'react';
import tamQuranData from '../Content/updated-tam-quran.json';
// import engQuranData from '../Content/eng-quran.json';
// import engQuranData from '../Content/eng-quran-converted.json';
import engQuranData from '../Content/eng-quran-with-links.json';
import LanguageContext from '../context/LanguageContext';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg'; // Assuming you want the share functionality
import ActiveTabContext from '../context/ActiveTab';
import { useNavigate } from 'react-router-dom';

const QuranSearch = ({ setIsSearchModalOpen, searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { language } = useContext(LanguageContext);
    const fontSizeContext = useContext(FontContext);
    const tab = useContext(ActiveTabContext);
    const navigate = useNavigate();

    // Select Quran data based on the language (Tamil or English)
    const quranData = language === 'Tamil' ? tamQuranData : engQuranData;

    useEffect(() => {
        console.log("Current search query:", searchQuery); // Debugging log
        if (searchQuery && quranData) {
            setIsLoading(true);
            const query = searchQuery.toLowerCase().trim();

            const filteredResults = quranData.chapters
                .map((chapter) => {
                    const matchingVerses = chapter.verses.filter((verse) => {
                        const verseTextMatches = verse.text.toLowerCase().includes(query);
                        const verseNumberMatches = verse.number.toString() === query; // Convert number to string for comparison
                        return verseTextMatches || verseNumberMatches; // Match either text or number
                    });
                    return matchingVerses.length > 0 ? { chapter, matchingVerses } : null;
                })
                .filter(Boolean); // Remove null values

            console.log("Filtered results:", filteredResults); // Debugging log
            setSearchResults(filteredResults);
            setIsLoading(false);
        } else {
            setSearchResults([]); // Clear results if the query is empty
        }
    }, [searchQuery, quranData]);

    const handleClick = (number) => {
        const number1 = parseInt(number.split('.')[0]);
        tab.setActiveTab(number1 - 1);
        navigate(`/chapters#${number}`);
        setIsSearchModalOpen(false)
    };

    return (
        <div className="mx-8 relative">
            <div className="absolute flex items-center justify-center -top-8 right-4">
                <button
                    className='text-primary800 rounded-full bg-white p-1 px-2'
                    onClick={() => setIsSearchModalOpen(false)}>
                    X
                </button>
            </div>

            <div className="quran-search-results">
                {isLoading ? (
                    <p>Loading...</p>
                ) : searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                        <div key={index} className="">
                            {result.matchingVerses.map((verse, vIndex) => (
                                <div key={vIndex} className="verse-container">
                                    <div className="verse-number">
                                        <span className="verse-num" style={{ fontSize: `${fontSizeContext.fontSize}px` }}>
                                            {verse.number}
                                        </span>
                                        <button
                                            className="more-btn"
                                            style={{ fontSize: `${fontSizeContext.fontSize}px` }}
                                            onClick={() => handleClick(verse.number)}
                                        >
                                            <img src={share1} alt="Share" loading='lazy'/>
                                        </button>
                                    </div>
                                    <div
                                        className="verse-text"
                                        style={{ fontSize: `${fontSizeContext.fontSize}px` }}
                                        dangerouslySetInnerHTML={{ __html: verse.text }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p>No results found for "{searchQuery}".</p>
                )}
            </div>
        </div>
    );
};

export default QuranSearch;
