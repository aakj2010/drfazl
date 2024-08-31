import React, { useContext, useEffect, useState } from 'react';
import './Chapters.css';
import Tab from './Tab';
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import TabContent from './TabContent';
import engQuranData from './eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import LanguageContext from '../context/LanguageContext';
import ActiveTabContext from '../context/ActiveTab';

function Quran() {
    const context = useContext(FontContext);
    const SideBarcontext = useContext(SideBarContext);
    const langContext = useContext(LanguageContext);
    const tab = useContext(ActiveTabContext);

    const data = langContext.language === 'Tamil' ? tamQuranData : engQuranData;

    const handleTabClick = (index) => {
        tab.setActiveTab(index);
    };

    const getFontFamily = () => {
        return langContext.language === 'Tamil' ? 'Mukta, sans-serif' : 'Nunito, sans-serif';
    };

    // State to store the dynamically calculated font size
    const [dynamicFontSize, setDynamicFontSize] = useState(langContext.language === 'Tamil' ? 20 : 24);

    useEffect(() => {
        // Update the font size dynamically when language changes
        setDynamicFontSize(langContext.language === 'Tamil' ? 20 : 24);
    }, [langContext.language]);

    const handleNextTab = () => {
        tab.setActiveTab((prevTab) => (prevTab < 113 ? prevTab + 1 : prevTab)); // Adjust max index as needed
    };

    const handlePreviousTab = () => {
        tab.setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab));
    };

    return (
        <>
            {/* <Header /> */}
            <div className='chapters' style={{ fontSize: `${context.fontSize}px` }}>
                <div className='img-container'>
                    <div className="bottom-left" style={{ fontSize: `${dynamicFontSize}px`, fontFamily: getFontFamily() }}>
                        {langContext.language === 'Tamil' ? 'குர்ஆன்' : 'Quran'}
                    </div>
                </div>
                <div className={!SideBarcontext.sidebarOpen ? 'chapter-list-wrapper' : 'chapter-list-relative'}>
                    <div className='tab-container' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='tabs' style={{ fontFamily: getFontFamily(), fontSize: `${context.fontSize}px` }}>
                            {data.chapters.map((chapter, index) => (
                                <React.Fragment key={chapter.number}>
                                    <Tab
                                        label={`${chapter.number}. ${chapter.title}`}
                                        isActive={tab.activeTab === index}
                                        onClick={() => handleTabClick(index)}
                                    />
                                    <div className='divider-chapter'></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tab-content" style={{ fontSize: `${context.fontSize}px` }}>
                    <TabContent 
                        index={tab.activeTab} 
                        onNextTab={handleNextTab} 
                        onPreviousTab={handlePreviousTab} 
                    />
                </div>

                <div className='empty'></div>
            </div>
        </>
    );
}

export default Quran;
