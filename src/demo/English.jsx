import React, { useContext } from 'react'
import '../screen/Settings.css'
import more from '../Assets/more.svg'
import FontContext from '../context/FontContext';

const English = () => {
    let context = useContext(FontContext)

    return (
        <>
            <div className='chapter-list-wrapper max-w-2xl mx-auto w-full'>
                <div className='chapter-list-items'>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>1. Victory upon Victory</li>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>2. Pasu </li>
                    <li className="list-items" style={{ fontSize: `${context.fontSize}px` }}>3. Imran’s Family</li>
                </div>
            </div>
            <div className='verse-wrapper max-w-2xl mx-auto w-full' style={{ fontSize: `${context.fontSize}px` }}>
                <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.1</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="more button" loading='lazy' />
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
        </>
    )
}

export default English