import React from 'react'
// import notes from '../Assets/notes.svg'
// import bookmark from '../Assets/bookmark.svg'
import more from '../Assets/more.svg'

function Chapter2() {
    return (
        <><div className='verse-wrapper'>
            <div className='verse-container'>
                <div className='verse-number'>
                    <div className='verse-num'>2.1</div>
                    <div className='more-btn-wrapper'>
                        <button className='more-btn'>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text'>All glory be to Allah, the God of the worlds.</div>
                <div className='verse-link'>
                    <div className='verse-link-item'>2.26</div>
                    <div className='verse-link-item'>2.28</div>
                </div>
            </div>

            <div className='verse-container'>
                <div className='verse-number'>
                    <div className='verse-num'>2.2</div>
                    <div className='more-btn-wrapper'>
                        <button className='more-btn'>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text'>Most Benevolent, Merciful.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>

            <div className='verse-container'>
                <div className='verse-number'>
                    <div className='verse-num'>2.3</div>
                    <div className='more-btn-wrapper'>
                        <button className='more-btn'>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text'>Master of the day’s Proceedings.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>

            <div className='verse-container'>
                <div className='verse-number'>
                    <div className='verse-num'>2.4</div>
                    <div className='more-btn-wrapper'>
                        <button className='more-btn'>
                            <img src={more} alt="" />
                        </button>
                    </div>
                </div>
                <div className='verse-text'>It is You who we obey; and You who we seek help.</div>
                {/* <div className='verse-link'>

</div> */}
            </div>         

            <div className='empty'></div>
        </div>
        </>
    )
}

export default Chapter2