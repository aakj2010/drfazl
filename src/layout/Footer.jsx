import './footer.css'

import chapter from '../Assets/chapter.svg'
import star from '../Assets/star.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import glossary from '../Assets/glossary.svg'
// import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// function useScrollDirection() {
//     const [scrollDirection, setScrollDirection] = useState(null);

//     useEffect(() => {
//         let lastScrollY = window.pageYOffset;

//         const updateScrollDirection = () => {
//             const scrollY = window.pageYOffset;
//             const direction = scrollY > lastScrollY ? "up" : "down";
//             if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
//                 setScrollDirection(direction);
//             }
//             lastScrollY = scrollY > 0 ? scrollY : 0;
//         };
//         window.addEventListener("scroll", updateScrollDirection); // add event listener
//         return () => {
//             window.removeEventListener("scroll", updateScrollDirection); // clean up
//         }
//     }, [scrollDirection]);

//     return scrollDirection;
// };
function Footer() {
    // const scrollDirection = useScrollDirection();

    // const [show, setShow] = useState(false)
    // const controlNavbar = () => {
    //     if (window.scrollY > 500) {
    //         setShow(true)
    //     } else {
    //         setShow(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar)
    //     return () => {
    //         window.removeEventListener('scroll', controlNavbar)
    //     }
    // }, [])

    return (
        <>
            {/* <HideScroll variant="up">
                <div className={classNames(styles.hideScrollUp)}> */}
            {/* <div className={`icons-wrapper ${scrollDirection === "up" ? "-bottom-24" : "bottom-0"}transition-all duration-500`}>
               
            </div> 

            </div>

            </HideScroll> */}


            <div className="icons-wrapper" >
                <NavLink to="" className='icon-with-title'>
                        <button className='icon'>
                            <img src={chapter} alt="" />
                        </button>
                    <div className='icon-title'>Chapter</div>
                </NavLink>
                <NavLink to="keywords" className='icon-with-title'>
                        <button className='icon'>
                            <img src={star} alt="" />
                        </button>
                    <div className='icon-title'>Keywords</div>
                </NavLink>
                
                <NavLink to="bookmarks" className='icon-with-title'>
                        <button className='icon'>
                            <img src={bookmark} alt="" />
                        </button>
                    <div className='icon-title'>Bookmarks</div>
                </NavLink>
                <NavLink to="notes" className='icon-with-title'>
                        <button className='icon'>
                            <img src={notes} alt="" />
                        </button>
                    <div className='icon-title'>Notes</div>
                </NavLink>

                <NavLink to="glossary" className='icon-with-title' >
                        <button className='icon'>
                            <img src={glossary} alt="" />
                        </button>
                    <div className='icon-title'>Glossary</div>
                </NavLink>
            </div>
        </>


    )
}

export default Footer