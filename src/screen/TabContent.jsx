import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import engQuranData from '../Content/eng-quran.json';
import tamQuranData from '../Content/updated-tam-quran.json';
import LanguageContext from '../context/LanguageContext';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg';
import htmlToReactParser from 'html-react-parser';
import Loader from '../layout/Loader';

const TabContent = ({ index, onNextTab, onPreviousTab }) => {
    const [chapter, setChapter] = useState({});
    const [loading, setLoading] = useState(false); // Added loading state
    const [swipeDirection, setSwipeDirection] = useState('');
    const languageContext = useContext(LanguageContext);
    const fontSizeContext = useContext(FontContext);
    const navigate = useNavigate();
    const data = languageContext.language === 'Tamil' ? tamQuranData : engQuranData;
    const Quran = languageContext.language === 'Tamil' ? "குர்ஆன்" : "Quran";

    const getFontFamily = () => {
        return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
    };

    useEffect(() => {
        setLoading(true); // Start loading when the index or language changes

        const chapterData = data.chapters.find((c) => c.number === index + 1);
        setChapter(chapterData);

        setLoading(false); // Stop loading after data is set
    }, [index, languageContext.language]);

    const handleShareClick = async (chapterTitle, verseNumber, verseText) => {
        try {
            const shareData = {
                title: `${index + 1}. ${chapterTitle}`,
                text: `${Quran} \n \n${index + 1}. ${chapterTitle}\n \n${verseNumber} ${verseText}`,
            };
            await navigator.share(shareData);
            console.log('Shared successfully');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    useEffect(() => {
        const verseNumberFromUrl = window.location.hash.substring(1);

        setTimeout(() => {
            const verseRefFromUrl = document.getElementById(verseNumberFromUrl);
            if (verseRefFromUrl) {
                verseRefFromUrl.classList.add('scroll-margin-temp');
                verseRefFromUrl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                // Remove the temporary class after scrolling
                setTimeout(() => {
                    verseRefFromUrl.classList.remove('scroll-margin-temp');
                }, 500); // Adjust this timeout as needed
            }
        }, 1000);
    }, [index]);

    const handleClick = (number) => {
        const number1 = parseInt(number);
        navigate(`/chapters/keywords#${number1}...`);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setSwipeDirection('swipe-left');
            setTimeout(() => {
                setSwipeDirection('');
                onNextTab();
            }, 500);
        },
        onSwipedRight: () => {
            setSwipeDirection('swipe-right');
            setTimeout(() => {
                setSwipeDirection('');
                onPreviousTab();
            }, 500);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div {...swipeHandlers} className={`verse-wrapper ${swipeDirection ? 'animate' : ''} ${swipeDirection}`}>
            {loading ? (
                <Loader /> // Render loader while loading
            ) : (
                chapter?.verses?.map((verse, i) => (
                    <div key={i} className='verse-container' id={verse.number}>
                        <div className='verse-number'>
                            <div className='verse-num' style={{ fontSize: `${fontSizeContext.fontSize}px` }}>{verse.number}</div>
                            <div className='more-btn-wrapper'>
                                <button
                                    className="more-btn"
                                    style={{ fontSize: `${fontSizeContext.fontSize}px` }}
                                    onClick={() => handleShareClick(chapter.title, verse.number, verse.text)}
                                >
                                    <img src={share1} alt="Share" />
                                </button>
                            </div>
                        </div>
                        <div className='verse-text'
                            style={{ fontSize: `${fontSizeContext.fontSize}px`, fontFamily: getFontFamily() }}
                        >
                            {/* {htmlToReactParser(verse.text)} */}
                            {htmlToReactParser(verse.text, {
                                replace: (domNode) => {
                                    // Check if the domNode is an element
                                    if (domNode.type === 'tag' && domNode.name === 'span') {
                                        // Check for any <Link> like structure and extract the link text
                                        const number = domNode.children[0]?.data;
                                        if (number) {
                                            return (
                                                <Link className='inline-block' to={`/chapters/keywords#${number}`}>
                                                    <span className='font-bold inline-block'>({number})</span>
                                                </Link>
                                            );
                                        }
                                    }
                                },
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TabContent;
