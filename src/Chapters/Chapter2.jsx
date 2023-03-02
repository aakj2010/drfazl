import React, { useContext } from 'react'
// import notes from '../Assets/notes.svg'
// import bookmark from '../Assets/bookmark.svg'
import more from '../Assets/more.svg'
import FontContext from '../context/FontContext'

function Chapter2() {
    let context = useContext(FontContext)
    return (
        <><div className='verse-wrapper'>
            <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>2.1</div>
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

            <div className='verse-container'>
                <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>2.2</div>
                    <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                        <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>Most Benevolent, Merciful.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>

            <div className='verse-container'>
                <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>2.3</div>
                    <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                        <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>Master of the day’s Proceedings.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>

            <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-num'>2.4</div>
                    <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                        <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>It is You who we obey; and You who we seek help.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>

            <div className='empty'></div>
        </div>
        </>
    )
}

export default Chapter2