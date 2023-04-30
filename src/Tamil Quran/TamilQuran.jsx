import React, { useContext, useState } from 'react'
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import Tab from '../screen/Tab';
import data from './tam-quran.json'
import TamilContent from './TamilContent';

const TamilQuran = () => {

    let context = useContext(FontContext);
    let SideBarcontext = useContext(SideBarContext);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <>
            <div className='chapters'>
                <div className='img-container' >
                    <div className="bottom-left" style={{ fontSize: `${context.fontSize}px` }}>Quran</div>
                </div>
                <div className={!SideBarcontext.open ? 'chapter-list-wrapper' : 'chapter-list-relative'}>
                    <div className='tab-container' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='tabs' style={{ fontSize: `${context.fontSize}px` }}>
                            {
                                data.chapters.map((chapter, index) => (
                                    <>
                                        <Tab
                                            label={`${chapter.number}. ${chapter.title}`}
                                            isActive={activeTab === index}
                                            onClick={() => handleTabClick(index)}
                                        />
                                        <div className='divider-chapter'></div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="tab-content" style={{ fontSize: `${context.fontSize}px` }}>
                    {[...Array(114)].map((_, i) => {
                        return activeTab === i && <TamilContent index={i + 1} />
                    })}
                </div>

                <div className='empty'></div>
            </div>
        </>
    )
}

export default TamilQuran