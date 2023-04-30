import React, { useEffect, useState } from 'react'
import data from './eng-quran.json'
import { useContext } from 'react';
import FontContext from '../context/FontContext';
import more from '../Assets/more.svg'

const TabContent = ({ index }) => {
    let context = useContext(FontContext)
    const [chapter, setChapter] = useState({});

    function fetchChapter() {
        const chapterData = data.chapters.find(
            (c) => c.number === index
        );
        console.log(chapterData); // debug statement
        setChapter(chapterData);
    }

    useEffect(() => {
        fetchChapter();
    }, []);

    console.log(chapter.verses); // debug statement

    return (
        <div className='verse-wrapper'>
            {chapter.verses && chapter.verses.map((verse, index) => (
                <>
                    <div className='verse-container'>
                        <div className='verse-number'>
                            <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>{verse.number}</div>
                            <div className='more-btn-wrapper'>
                                <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                    <img src={more} alt="" />
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
            ))}
        </div>
    );
}

export default TabContent;