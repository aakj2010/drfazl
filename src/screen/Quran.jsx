import React, { useContext } from 'react'
import './Chapters.css'
import Tab from './Tab';
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import Header from '../layout/Header';
import TabContent from './TabContent';
import engQuranData from './eng-quran.json';
import tamQuranData from '../Tamil Quran/tam-quran.json';
import LanguageContext from '../context/LanguageContext';


function Quran({ activeTab, setActiveTab }) {
    let context = useContext(FontContext);
    let SideBarcontext = useContext(SideBarContext);
    const langContext = useContext(LanguageContext);

    const data = langContext.language === 'Tamil' ? tamQuranData : engQuranData;
    
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <>
            <Header />
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
                        return activeTab === i && <TabContent index={i + 1} key={i} />
                    })}
                </div>

                <div className='empty'></div>
            </div>
        </>
    )
}

export default Quran