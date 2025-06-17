import React, { useContext } from 'react'
import '../screen/Settings.css'
import more from '../Assets/more.svg'
import FontContext from '../context/FontContext';

const Tamil = () => {
    let context = useContext(FontContext)

    return (
        <>
            <div className='chapter-list-wrapper max-w-2xl mx-auto w-full'>
                <div className='chapter-list-items'>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>1. வெற்றிக்கு மேல் வெற்றி</li>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>2. பசு</li>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>3. இம்ரானின் குடும்பத்தினர்</li>
                </div>
            </div>
            <div className='verse-wrapper max-w-2xl mx-auto w-full' style={{ fontSize: `${context.fontSize}px` }}>
                <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.1</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>அனைத்துப் புகழும், அகிலங்களின் இறைவன் அல்லாஹ்வுக்கே ஆகும்.</div>
                    <div className='verse-link' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.26</div>
                        <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.28</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tamil