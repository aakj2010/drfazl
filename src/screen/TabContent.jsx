import React, { useEffect, useState } from 'react'
import engQuranData from './eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg'

const TabContent = ({ index }) => {
    const [chapter, setChapter] = useState({});

    let context = useContext(FontContext)
    const langContext = useContext(LanguageContext);


    const data = langContext.language === 'Tamil' ? tamQuranData : engQuranData;
    const Quran = langContext.language === 'Tamil' ? "குர்ஆன்" : "Quran";

    function fetchChapter() {
        const chapterData = data.chapters.find(
            (c) => c.number === index
        );
        // console.log(chapterData);
        setChapter(chapterData);
    }

    useEffect(() => {
        fetchChapter();
    });

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
    }
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
        }, 300);
      }, []);
    
    return (
        <div className='verse-wrapper' >
            {React.Children.toArray(
                chapter.verses && chapter.verses.map((verse, index) => (
                    <>
                        <div className='verse-container' key={index} id={verse.number}>
                            <div className='verse-number' >
                                <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>{verse.number}</div>
                                <div className='more-btn-wrapper'>
                                    <button
                                        className="more-btn"
                                        style={{ fontSize: `${context.fontSize}px` }}
                                        onClick={() => handleShareClick(chapter.title, verse.number, verse.text)}
                                    >
                                        <img src={share1} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className='verse-text'
                                style={{ fontSize: `${context.fontSize}px` }}
                                dangerouslySetInnerHTML={{ __html: verse.text }}></div>
                            {/* <div className='verse-link-box'>
                    {
                        verse.link.map((link) => {
                            return <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>{link}</div>
                        })
                    }

                </div> */}

                        </div>
                        <div className='verse-divider'></div>
                    </>
                )))}

        </div>
    );
}

export default TabContent;