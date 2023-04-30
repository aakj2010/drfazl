import React, { useContext, useState } from 'react'
import './Chapters.css'
import Tab from './Tab';
import FontContext from '../context/FontContext';
import SideBarContext from '../context/SideBarContext';
import Header from '../layout/Header';
import TabContent from './TabContent';
import data from './eng-quran.json';


function Quran() {
    let context = useContext(FontContext);
    let SideBarcontext = useContext(SideBarContext);

    const [activeTab, setActiveTab] = useState(0);

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
                            {/* <Tab
                                label="1.Victory upon victory"
                                isActive={activeTab === 0}
                                onClick={() => handleTabClick(0)}
                            />
                            <div className='divider-chapter'></div> */}

                        </div>
                    </div>
                </div>
                <div className="tab-content" style={{ fontSize: `${context.fontSize}px` }}>
                    {activeTab === 0 && <TabContent index={1} />}
                    {activeTab === 1 && <TabContent index={2} />}
                    {activeTab === 2 && <TabContent index={3} />}
                    {activeTab === 3 && <TabContent index={4} />}
                    {activeTab === 4 && <TabContent index={5} />}
                    {activeTab === 5 && <TabContent index={6} />}
                    {activeTab === 6 && <TabContent index={7} />}
                    {activeTab === 7 && <TabContent index={8} />}
                    {activeTab === 8 && <TabContent index={9} />}
                    {activeTab === 9 && <TabContent index={10} />}
                    {activeTab === 10 && <TabContent index={11} />}
                    {activeTab === 11 && <TabContent index={12} />}
                    {activeTab === 12 && <TabContent index={13} />}
                    {activeTab === 13 && <TabContent index={14} />}
                    {activeTab === 14 && <TabContent index={15} />}
                    {activeTab === 15 && <TabContent index={16} />}
                    {activeTab === 16 && <TabContent index={17} />}
                    {activeTab === 17 && <TabContent index={18} />}
                    {activeTab === 18 && <TabContent index={19} />}
                    {activeTab === 19 && <TabContent index={20} />}
                    {activeTab === 20 && <TabContent index={21} />}
                    {activeTab === 21 && <TabContent index={22} />}
                    {activeTab === 22 && <TabContent index={23} />}
                    {activeTab === 23 && <TabContent index={24} />}
                    {activeTab === 24 && <TabContent index={25} />}
                    {activeTab === 25 && <TabContent index={26} />}
                    {activeTab === 26 && <TabContent index={27} />}
                    {activeTab === 27 && <TabContent index={28} />}
                    {activeTab === 28 && <TabContent index={29} />}
                    {activeTab === 29 && <TabContent index={30} />}
                    {activeTab === 30 && <TabContent index={31} />}
                    {activeTab === 31 && <TabContent index={32} />}
                    {activeTab === 32 && <TabContent index={33} />}
                    {activeTab === 33 && <TabContent index={34} />}
                    {activeTab === 34 && <TabContent index={35} />}
                    {activeTab === 35 && <TabContent index={36} />}
                    {activeTab === 36 && <TabContent index={37} />}
                    {activeTab === 37 && <TabContent index={38} />}
                    {activeTab === 38 && <TabContent index={39} />}
                    {activeTab === 39 && <TabContent index={40} />}
                    {activeTab === 40 && <TabContent index={41} />}
                    {activeTab === 41 && <TabContent index={42} />}
                    {activeTab === 42 && <TabContent index={43} />}
                    {activeTab === 43 && <TabContent index={44} />}
                    {activeTab === 44 && <TabContent index={45} />}
                    {activeTab === 45 && <TabContent index={46} />}
                    {activeTab === 46 && <TabContent index={47} />}
                    {activeTab === 47 && <TabContent index={48} />}
                    {activeTab === 48 && <TabContent index={49} />}
                    {activeTab === 49 && <TabContent index={50} />}
                    {activeTab === 50 && <TabContent index={51} />}
                    {activeTab === 51 && <TabContent index={52} />}
                    {activeTab === 52 && <TabContent index={53} />}
                    {activeTab === 53 && <TabContent index={54} />}
                    {activeTab === 54 && <TabContent index={55} />}
                    {activeTab === 55 && <TabContent index={56} />}
                    {activeTab === 56 && <TabContent index={57} />}
                    {activeTab === 57 && <TabContent index={58} />}
                    {activeTab === 58 && <TabContent index={59} />}
                    {activeTab === 59 && <TabContent index={60} />}
                    {activeTab === 60 && <TabContent index={61} />}
                    {activeTab === 61 && <TabContent index={62} />}
                    {activeTab === 62 && <TabContent index={63} />}
                    {activeTab === 64 && <TabContent index={64} />}
                    {activeTab === 65 && <TabContent index={65} />}
                    {activeTab === 66 && <TabContent index={66} />}
                    {activeTab === 67 && <TabContent index={67} />}
                    {activeTab === 68 && <TabContent index={68} />}
                    {activeTab === 69 && <TabContent index={69} />}
                    {activeTab === 70 && <TabContent index={70} />}
                    {activeTab === 71 && <TabContent index={71} />}
                    {activeTab === 72 && <TabContent index={72} />}
                    {activeTab === 73 && <TabContent index={74} />}
                    {activeTab === 74 && <TabContent index={75} />}
                    {activeTab === 75 && <TabContent index={76} />}
                    {activeTab === 76 && <TabContent index={77} />}
                    {activeTab === 77 && <TabContent index={78} />}
                    {activeTab === 78 && <TabContent index={79} />}
                    {activeTab === 79 && <TabContent index={80} />}
                    {activeTab === 80 && <TabContent index={81} />}
                    {activeTab === 81 && <TabContent index={82} />}
                    {activeTab === 82 && <TabContent index={83} />}
                    {activeTab === 83 && <TabContent index={84} />}
                    {activeTab === 84 && <TabContent index={85} />}
                    {activeTab === 85 && <TabContent index={86} />}
                    {activeTab === 86 && <TabContent index={87} />}
                    {activeTab === 87 && <TabContent index={88} />}
                    {activeTab === 88 && <TabContent index={89} />}
                    {activeTab === 89 && <TabContent index={90} />}
                    {activeTab === 90 && <TabContent index={91} />}
                    {activeTab === 91 && <TabContent index={92} />}
                    {activeTab === 92 && <TabContent index={93} />}
                    {activeTab === 93 && <TabContent index={94} />}
                    {activeTab === 94 && <TabContent index={95} />}
                    {activeTab === 95 && <TabContent index={96} />}
                    {activeTab === 96 && <TabContent index={97} />}
                    {activeTab === 97 && <TabContent index={98} />}
                    {activeTab === 98 && <TabContent index={99} />}
                    {activeTab === 99 && <TabContent index={100} />}
                    {activeTab === 100 && <TabContent index={101} />}
                    {activeTab === 101 && <TabContent index={102} />}
                    {activeTab === 102 && <TabContent index={103} />}
                    {activeTab === 103 && <TabContent index={104} />}
                    {activeTab === 104 && <TabContent index={105} />}
                    {activeTab === 105 && <TabContent index={106} />}
                    {activeTab === 106 && <TabContent index={107} />}
                    {activeTab === 107 && <TabContent index={108} />}
                    {activeTab === 108 && <TabContent index={109} />}
                    {activeTab === 109 && <TabContent index={110} />}
                    {activeTab === 110 && <TabContent index={111} />}
                    {activeTab === 111 && <TabContent index={112} />}
                    {activeTab === 112 && <TabContent index={113} />}
                    {activeTab === 113 && <TabContent index={114} />}
                </div>
                <div className='empty'></div>
            </div>
        </>
    )
}

export default Quran