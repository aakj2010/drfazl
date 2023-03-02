import './footer.css'
import chapter from '../Assets/chapter.svg'
import star from '../Assets/star.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import glossary from '../Assets/glossary.svg'
import { NavLink } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className="icons-wrapper" >
                <NavLink to="" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={chapter} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Chapter</div>
                </NavLink>
                <NavLink to="keywords" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={star} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Keywords</div>
                </NavLink>

                <NavLink to="bookmarks" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={bookmark} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Bookmarks</div>
                </NavLink>
                <NavLink to="notes" className='icon-with-title'>
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={notes} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Notes</div>
                </NavLink>

                <NavLink to="glossary" className='icon-with-title' >
                    <div className='icon-container'>
                        <button className='icon'>
                            <img src={glossary} alt="" />
                        </button>
                    </div>
                    <div className='icon-title'>Glossary</div>
                </NavLink>
            </div>
        </>
    )
}

export default Footer