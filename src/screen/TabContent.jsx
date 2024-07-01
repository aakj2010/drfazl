import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import engQuranData from './eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import LanguageContext from '../context/LanguageContext';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg';
import htmlToReactParser from 'html-react-parser';

const TabContent = ({ index, onNextTab, onPreviousTab }) => {
    const [chapter, setChapter] = useState({});
    const [animationClass, setAnimationClass] = useState('');
    const languageContext = useContext(LanguageContext);
    const fontSizeContext = useContext(FontContext);
    const navigate = useNavigate();
    const data = languageContext.language === 'Tamil' ? tamQuranData : engQuranData;
    const Quran = languageContext.language === 'Tamil' ? "குர்ஆன்" : "Quran";

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
        // Parse the verse number from the URL
        const verseNumberFromUrl = window.location.hash.substring(1);

        // Scroll to the verseRef after a short delay (adjust delay as needed)
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
            setAnimationClass('animate-exit-active');
            setTimeout(() => {
                setAnimationClass('animate-enter-active');
                onNextTab();
            }, 500);
        },
        onSwipedRight: () => {
            setAnimationClass('animate-exit-active');
            setTimeout(() => {
                setAnimationClass('animate-enter-active');
                onPreviousTab();
            }, 500);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    useEffect(() => {
        setAnimationClass('animate-enter-active');
        const timer = setTimeout(() => {
            setAnimationClass('');
        }, 500);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div {...swipeHandlers} className={`verse-wrapper ${animationClass}`}>
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
