import React, { useContext, useState } from 'react'
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import Tab from '../screen/Tab';
import TamilQuran1 from './TamilQuran1';

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
                            <Tab
                                label="1. வெற்றிக்கு மேல் வெற்றி"
                                isActive={activeTab === 0}
                                onClick={() => handleTabClick(0)}
                            />
                            <Tab
                                label="2. பசு"
                                isActive={activeTab === 1}
                                onClick={() => handleTabClick(1)}
                            />
                            <Tab
                                label="3. இம்ரானின் குடும்பத்தினர்"
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
                    {activeTab === 0 && <TamilQuran1 />}
                    {activeTab === 1 && <TamilQuran1 />}
                    {activeTab === 2 && <p>Content for Tab 3</p>}
                    {activeTab === 3 && <TamilQuran1 />}
                    {activeTab === 4 && <TamilQuran1 />}
                </div>
            </div>
        </>
  )
}

export default TamilQuran