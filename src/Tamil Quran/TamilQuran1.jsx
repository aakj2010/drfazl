import React, { useContext } from 'react'
import FontContext from '../context/FontContext'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import more from '../Assets/more.svg'

const TamilQuran1 = () => {
    let context = useContext(FontContext)
    return (
        <>
            <div className='verse-wrapper'>
                <div className='verse-container'>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.1</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>நீயே அளவற்ற அருளாளன்; நிகரற்ற இரக்கமுடையவன்</div>
                    <div className='verse-link' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.26</div>
                        <div className='verse-link-item' style={{ fontSize: `${context.fontSize}px` }}>2.28</div>
                    </div>
                </div>

                <div className='verse-container' style={{ fontSize: `${context.fontSize}px` }}>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.2</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>நீயே அகிலங்களின்
                        அதிபதி; நீயே அறிவிப்பவன்; நீயே
                        வழிகாட்டுபவன்</div>
                    {/* <div className='verse-link'>

</div> */}
                </div>

                <div className='verse-container'>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.3</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>நான் உன்னை கொண்டே
                        திருப்தியடைகிறேன்.</div>
                    {/* <div className='verse-link'>

</div> */}
                </div>

                <div className='verse-container'>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.4</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>நீயே மன்னிப்பவன்;
                        நீயே பிழை பொறுப்பவன்</div>
                    {/* <div className='verse-link'>

</div> */}
                </div>
                <div className='verse-container'>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.5</div>
                        <div className='btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='bookmark-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={bookmark} alt="" />
                            </button>
                            <button className='notes-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={notes} alt="" />
                            </button>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>நீயே
                        எனக்காகப் பொறுப்பேற்றுக் கொள்பவன்</div>
                    {/* <div className='verse-link'>

</div> */}
                </div>

                <div className='verse-container'>
                    <div className='verse-number' style={{ fontSize: `${context.fontSize}px` }}>
                        <div className='verse-num' style={{ fontSize: `${context.fontSize}px` }}>1.6</div>
                        <div className='more-btn-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
                            <button className='more-btn' style={{ fontSize: `${context.fontSize}px` }}>
                                <img src={more} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='verse-text' style={{ fontSize: `${context.fontSize}px` }}>என்னை நீ
                        நேர்வழியில் ஆக்குவாயாக.</div>
                    {/* <div className='verse-link'>

</div> */}
                </div>

                <div className='empty'></div>
            </div>
        </>
    )
}

export default TamilQuran1

