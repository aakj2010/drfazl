import React from 'react'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import more from '../Assets/more.svg'

function Chapter1() {
    return (
        <>
            <div className='verse-wrapper'>
                <div className='verse-container'>
                    <div className='verse-number'>
                        <div className='verse-num'>1.1</div>
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
                        <div className='verse-num'>1.2</div>
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
                        <div className='verse-num'>1.3</div>
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
                        <div className='verse-num'>1.4</div>
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
                <div className='verse-container'>
                    <div className='verse-number'>
                        <div className='verse-num'>1.5</div>
                        <div className='btn-wrapper'>
                            <button className='bookmark-btn'>
                                <img src={bookmark} alt="" />
                            </button>
                            <button className='notes-btn'>
                                <img src={notes} alt="" />
                            </button>
                            <button className='more-btn'>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text'>Keep us on the right course.</div>
                    {/* <div className='verse-link'>
        
    </div> */}
                </div>

                <div className='verse-container'>
                    <div className='verse-number'>
                        <div className='verse-num'>1.6</div>
                        <div className='more-btn-wrapper'>
                            <button className='more-btn'>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text'>Keep us on the right course.</div>
                    {/* <div className='verse-link'>
        
    </div> */}
                </div>
                <div className='verse-container'>
                    <div className='verse-number'>
                        <div className='verse-num'>1.6</div>
                        <div className='more-btn-wrapper'>
                            <button className='more-btn'>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text'>Keep us on the right course.</div>
                    {/* <div className='verse-link'>
        
    </div> */}
                </div>

                <div className='empty'></div>
            </div>
        </>

    )
}

export default Chapter1