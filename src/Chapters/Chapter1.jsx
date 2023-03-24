import React, { useContext } from 'react'
// import notes from '../Assets/notes.svg'
// import bookmark from '../Assets/bookmark.svg'
import more from '../Assets/more.svg'
import FontContext from '../context/FontContext'
import { engChapter1 } from '../data/Data'

function Chapter1() {
    let context = useContext(FontContext)
    return (
        <>
            <div className='verse-wrapper'>

                {
                    engChapter1.map((verse) => {
                        return <>
                            <div className='verse-container' key={verse.id}>
                                <div className='verse-number'>
                                    <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>{verse.number}</div>
                                    <div className='more-btn-wrapper'>
                                        <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                            <img src={more} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>{verse.text}</div>
                                {/* <div className='verse-link-box'>
                                    <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>{verse.link}</div>
                                </div> */}
                                <div className='verse-divider'></div>
                            </div>
                        </>
                    })
                }
                <div className='empty'></div>
            </div>
        </>
    )
}

export default Chapter1