import React, { useContext, useState } from 'react'
import './Settings.css'
import more from '../Assets/more.svg'
import FontContext from '../context/FontContext'

const Settings = () => {
    let context = useContext(FontContext)
    // const [save, setSave] = useState(fontSize)

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
                            <button className='bi-ling-btn' onClick={() => context.setFontSize(14)}>Small</button>
                            <button className='active-eng-btn' onClick={() => context.setFontSize(16)}>Default</button>
                            <button className='bi-ling-btn' onClick={() => context.setFontSize(18)}>Large</button>
                        </div>
                    </div>
                </div>
                
                <div className='demo-box'>
                    <div className='chapter-list-wrapper'>
                        <div className='chapter-list-items'>
                            <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>1. Victory upon Victory</li>
                            <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>2. Pasu </li>
                            <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>3. Imran’s Family</li>
                        </div>
                    </div>
                    <div className='verse-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                            <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                                <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.1</div>
                                <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                                    <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                        <img src={more} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>All glory be to Allah, the God of the worlds.</div>
                            <div className='verse-link' style={{ fontSize: `${context.fontSize}px` }}>
                                <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.26</div>
                                <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.28</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='save-box'>
                    <button>Save Changes</button>
                </div>
            </div>


        </div>
    )
}

export default Settings