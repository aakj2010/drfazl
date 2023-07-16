import React, { useContext, useState } from 'react'
import './Chapters.css'
import Tab from './Tab';
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import Header from '../layout/Header';
import TabContent from './TabContent';
import data from './eng-quran.json';


function Quran({ activeTab, setActiveTab }) {
    let context = useContext(FontContext);
    let SideBarcontext = useContext(SideBarContext);


    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <>
            <Header/>
            <div className='chapters'>
                <div className='img-container' >
                    <div className="bottom-left" style={{ fontSize: `${context.fontSize}px` }}>Quran</div>
                </div>
                <div className={!SideBarcontext.open ? 'chapter-list-wrapper' : 'chapter-list-relative'}>
                    <div className='tab-container' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='tabs' style={{ fontSize: `${context.fontSize}px` }}>
                            {
                                React.Children.toArray(
                                    data.chapters.map((chapter, index) => (
                                        <React.Fragment key={chapter.number}>
                                            <Tab
                                                label={`${chapter.number}. ${chapter.title}`}
                                                isActive={activeTab === index}
                                                onClick={() => handleTabClick(index)}
                                            />
                                            <div className='divider-chapter'></div>
                                        </React.Fragment>
                                    )))
                            }
                        </div>
                    </div>
                </div>
                <div className="tab-content" style={{ fontSize: `${context.fontSize}px` }}>
                    {[...Array(114)].map((_, i) => {
                        return activeTab === i && <TabContent index={i + 1} />
                    })}
                </div>

                <div className='empty'></div>
            </div>
        </>
    )
}

export default Quran