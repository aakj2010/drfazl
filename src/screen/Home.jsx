import React from 'react'
import './home.css'
import more from '../Assets/more.svg'
import bg from '../Assets/bg.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'

// import { li } from 'react-router-dom'

function Home() {
    return (
        <div className=''>
            <div className='home-wrapper'>
                <div className='img'>
                    <figure>
                        <img src={bg} alt="come what may" />
                    </figure>
                </div>

                <div className='chapter-list-wrapper'>
                    <div className='chapter-list-items'>
                        <li>1. Victory upon Victory</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>2. Pasu</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>3. Imran’s Family</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>4. Women</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>5. Unavu maravai</li>
                    </div>
                    <div className='chapter-list-items'>
                        <li>6. Kalnadaigal</li>
                    </div>
                </div>

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
                        {/* <div className='verse-number'>
                            <div className='verse-num'>1.6</div>
                            <div className='more-btn-wrapper'>
                                <button className='more-btn'>
                                    <img src={more} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='verse-text'>Keep us on the right course.</div> */}
                        {/* <div className='verse-link'>
                        
                    </div> */}
                    </div>

                </div>

                {/* <div className='icons-wrapper'>
                    <div className='icon-with-title'>
                        <div className='icon-container'>
                            <button className='icon'>
                                <img src={menu} alt="" />
                            </button>
                        </div>
                        <div className='icon-title'>Chapter</div>
                    </div>
                    <div className='icon-with-title'>
                        <div className='icon-container'>
                            <button className='icon'>
                                <img src={star} alt="" />
                            </button>
                        </div>
                        <div className='icon-title'>Keywords</div>
                    </div>
                    <div className='icon-with-title'>
                        <div className='icon-container'>
                            <button className='icon'>
                                <img src={home} alt="" />
                            </button>
                        </div>
                        <div className='icon-title'>Home</div>
                    </div>
                    <div className='icon-with-title'>
                        <div className='icon-container'>
                            <button className='icon'>
                                <img src={bookmark} alt="" />
                            </button>
                        </div>
                        <div className='icon-title'>Bookmarks</div>
                    </div>
                    <div className='icon-with-title'>
                        <div className='icon-container'>
                            <button className='icon'>
                                <img src={notes} alt="" />
                            </button>
                        </div>
                        <div className='icon-title'>Notes</div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Home