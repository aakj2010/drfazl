import React, { useState } from 'react'
import './Settings.css'
import more from '../Assets/more.svg'

const Settings = () => {
    const [fontSize, setFontSize] = useState(16)

    const [list, setList] = useState(['Small', 'Default', 'Large'])
    const [active, setActive] = useState(null)
    return (
        <div className='settings-wrapper'>
            <div className='settings-container'>
                <div className='settings-box'>
                    <div className='lang-box'>
                        <p>Change Language</p>
                        <div className='btn-box'>
                            <button className='bi-ling-btn'>தமிழ்</button>
                            <button className='active-eng-btn'>English</button>
                            <button className='bi-ling-btn'>Bi-lingual</button>
                        </div>
                    </div>
                    <div className='lang-box'>
                        <p>Font Size</p>
                        <div className='btn-box'>
                            <button className='bi-ling-btn' onClick={() => setFontSize(14)}>Small</button>
                            <button className='active-eng-btn' onClick={() => setFontSize(16)}>Default</button>
                            <button className='bi-ling-btn' onClick={() => setFontSize(18)}>Large</button>
                            {/* {
                                list.map((item) => {
                                    return (
                                        <li key={item.index}
                                            onClick={() => setActive(item)}
                                            className={`bi-ling-btn ${active === item && 'active'}`}>
                                            <button className='bi-ling-btn'>{item}</button>
                                        </li>
                                    )
                                })
                            } */}
                        </div>
                    </div>
                </div>
                {/* <div className='demo-box'>
                    <Tabs defaultIndex={1} onSelect={(index) => console.log(index)} >
                        <TabList className='chapter-list-wrapper'>
                            <Tab className="list-items" style={{ fontSize: `${fontSize}px` }} >1.Victory upon Victory</Tab>
                            <Tab className="list-items" style={{ fontSize: `${fontSize}px` }}>2.Pasu</Tab>
                            <Tab className="list-items" style={{ fontSize: `${fontSize}px` }}>3.Imran's Family</Tab>
                        </TabList>

                        <TabPanel style={{ fontSize: `${fontSize}px` }}>
                            <Chapter1 />
                        </TabPanel>
                        <TabPanel style={{ fontSize: `${fontSize}px` }}>
                            <Chapter2 />
                        </TabPanel>
                        <TabPanel style={{ fontSize: `${fontSize}px` }}>
                            <Chapter3 />
                        </TabPanel>
                    </Tabs>
                </div> */}
                <div className='demo-box'>
                    <div className='chapter-list-wrapper'>
                        <div className='chapter-list-items'>
                            <li className="list-items" style={{ fontSize: `${fontSize}px` }}>1. Victory upon Victory</li>
                            <li className="list-items" style={{ fontSize: `${fontSize}px` }}>2. Pasu </li>
                            <li className="list-items" style={{ fontSize: `${fontSize}px` }}>3. Imran’s Family</li>
                        </div>
                    </div>
                    <div className='verse-wrapper' style={{ fontSize: `${fontSize}px` }}>
                        <div className='verse-container' style={{ fontSize: `${fontSize}px` }}>
                            <div className='verse-number' style={{ fontSize: `${fontSize}px` }}>
                                <div className='verse-num' style={{ fontSize: `${fontSize}px` }}>1.1</div>
                                <div className='more-btn-wrapper' style={{ fontSize: `${fontSize}px` }}>
                                    <button className='more-btn' style={{ fontSize: `${fontSize}px` }}>
                                        <img src={more} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className='verse-text' style={{ fontSize: `${fontSize}px` }}>All glory be to Allah, the God of the worlds.</div>
                            <div className='verse-link' style={{ fontSize: `${fontSize}px` }}>
                                <div className='verse-link-item' style={{ fontSize: `${fontSize}px` }}>2.26</div>
                                <div className='verse-link-item' style={{ fontSize: `${fontSize}px` }}>2.28</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Settings