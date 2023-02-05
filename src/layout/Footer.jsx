// import React, { useEffect, useState } from 'react'
import './footer.css'
import menu from '../Assets/menu_book.svg'
import home from '../Assets/home.svg'
import star from '../Assets/star.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'

function Footer() {
    // const [isVisible, setIsVisible] = useState(true);
    // const [height, setHeight] = useState(0)

    // useEffect(() => {
    //     window.addEventListener("scroll", listenToScroll);
    //     return () =>
    //         window.removeEventListener("scroll", listenToScroll);
    // }, [])

    // const listenToScroll = () => {
    //     let heightToHideFrom = 100;
    //     const winScroll = document.body.scrollTop ||
    //         document.documentElement.scrollTop;
    //     setHeight(winScroll);

    //     if (winScroll > heightToHideFrom) {
    //         isVisible && setIsVisible(false);
    //     } else {
    //         setIsVisible(true);
    //     }
    // };
    return (
        <>
            {/* {
                isVisible
                && */}
                <div className='icons-wrapper'>
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
                </div>
            {/* } */}
        </>


    )
}

export default Footer