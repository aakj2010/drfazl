import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import engQuranData from './eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import LanguageContext from '../context/LanguageContext';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg';
import htmlToReactParser from 'html-react-parser';

const TabContent = ({ index, onNextTab, onPreviousTab }) => {
    const [chapter, setChapter] = useState({});
    const languageContext = useContext(LanguageContext);
    const fontSizeContext = useContext(FontContext);
    const navigate = useNavigate();
    const data = languageContext.language === 'Tamil' ? tamQuranData : engQuranData;
    const Quran = languageContext.language === 'Tamil' ? "குர்ஆன்" : "Quran";
    const verseWrapperRef = useRef(null);

    const getFontFamily = () => {
        return languageContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
    };

    const fetchChapter = () => {
        const chapterData = data.chapters.find((c) => c.number === index);
        setChapter(chapterData);
    };

    useEffect(() => {
        fetchChapter();
    }, [index, languageContext.language]);

    const handleShareClick = async (chapterTitle, verseNumber, verseText) => {
        try {
            const shareData = {
                title: `${index}. ${chapterTitle}`,
                text: `${Quran} \n \n${index}. ${chapterTitle}\n \n${verseNumber} ${verseText}`,
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
                verseRefFromUrl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 500);
    }, []);

    const handleClick = (number) => {
        const number1 = parseInt(number);
        navigate(`/chapters/keywords#${number1}`);
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (verseWrapperRef.current) {
                verseWrapperRef.current.classList.add('swipe-left');
                setTimeout(() => {
                    verseWrapperRef.current.classList.remove('swipe-left');
                    onNextTab();
                }, 500); // Match the duration of CSS transition
            }
        },
        onSwipedRight: () => {
            if (verseWrapperRef.current) {
                verseWrapperRef.current.classList.add('swipe-right');
                setTimeout(() => {
                    verseWrapperRef.current.classList.remove('swipe-right');
                    onPreviousTab();
                }, 500); // Match the duration of CSS transition
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div ref={verseWrapperRef} {...swipeHandlers} className='verse-wrapper'>
            {chapter.verses && chapter.verses.map((verse, index) => (
                <div key={index} className='verse-container' id={verse.number}>
                    <div className='verse-number'>
                        <div className='verse-num' style={{ fontSize: `${fontSizeContext.fontSize}px` }}>{verse.number}</div>
                        <div className='more-btn-wrapper'>
                            <button
                                className="more-btn"
                                style={{ fontSize: `${fontSizeContext.fontSize}px` }}
                                onClick={() => handleShareClick(chapter.title, verse.number, verse.text)}
                            >
                                <img src={share1} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text'
                        style={{ fontSize: `${fontSizeContext.fontSize}px`, fontFamily: getFontFamily() }}
                    >
                        {htmlToReactParser(verse.text)}
                    </div>
                    <div className='verse-divider'></div>
                </div>
            ))}
        </div>
    );
}

export default TabContent;
