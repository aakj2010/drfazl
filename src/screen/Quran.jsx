import React, { useContext, useState } from 'react'
import './Chapters.css'
import Tab from './Tab';
import Chapter1 from '../Chapters/Chapter1'
import Chapter2 from '../Chapters/Chapter2'
import Chapter5 from '../Chapters/Chapter5'
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';


function Quran() {
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
                            <Tab
                                label="1.Victory upon victory"
                                isActive={activeTab === 0}
                                onClick={() => handleTabClick(0)}
                            />
                            <Tab
                                label="2.Pasu"
                                isActive={activeTab === 1}
                                onClick={() => handleTabClick(1)}
                            />
                            <Tab
                                label="3.Imran's Family"
                                isActive={activeTab === 2}
                                onClick={() => handleTabClick(2)}
                            />
                            <Tab
                                label="4.Womens"
                                isActive={activeTab === 3}
                                onClick={() => handleTabClick(3)}
                            />
                            <Tab
                                label="5.Kalnadaigal"
                                isActive={activeTab === 4}
                                onClick={() => handleTabClick(4)}
                            />
                        </div>
                    </div>
                </div>
                <div className="tab-content" style={{ fontSize: `${context.fontSize}px` }}>
                    {activeTab === 0 && <Chapter1 />}
                    {activeTab === 1 && <Chapter2 />}
                    {activeTab === 2 && <p>Content for Tab 3</p>}
                    {activeTab === 3 && <Chapter1 />}
                    {activeTab === 4 && <Chapter5 />}
                </div>
            </div>
        </>
    )
}

export default Quran