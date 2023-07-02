import React, { useEffect, useState } from 'react'
import data from './eng-quran.json'
import { useContext } from 'react';
import FontContext from '../context/FontContext';
import share1 from '../Assets/share1.svg'

const TabContent = ({ index }) => {
    let context = useContext(FontContext)
    const [chapter, setChapter] = useState({});

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
                text: `${index}. ${chapterTitle}\n${verseNumber} ${verseText}`,
            };
            await navigator.share(shareData);
            console.log('Shared successfully');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    }
    // console.log(chapter.verses); 

    return (
        <div className='verse-wrapper' >
            {React.Children.toArray(
                chapter.verses && chapter.verses.map((verse, index) => (
                    <>
                        <div className='verse-container' key={index}>
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
                            <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>{verse.text}</div>
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