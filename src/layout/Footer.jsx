import './footer.css'
import chapter from '../Assets/chapter.svg'
import star from '../Assets/star.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import glossary from '../Assets/glossary.svg'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material'


const StyledLinkButton = styled(NavLink)({
    textDecoration: 'none',
    textAlign: 'center',
    color: '#4b5768',
    "&.active": {
        color: '#4B00C2',
        outline: 2,
        borderBottomColor: '#4B00C2'
    }
})

function Footer() {


    return (
        <>
            <div className="icons-wrapper" >
                <StyledLinkButton to="" >
                    <li className='icon-with-title'>
                        <span className='icon'>
                            <img src={chapter} alt="" />
                        </span>
                        <span className='icon-title'>Chapter</span>
                    </li>
                </StyledLinkButton>
                <StyledLinkButton to="keywords" className='icon-with-title'>
                    
                        <img className='icon' src={star} alt="" />
                    Keywords
                    {/* <span className='icon-title'>Keywords</span> */}
                </StyledLinkButton>

                <StyledLinkButton to="bookmarks" className='icon-with-title'>
                    <button className='icon'>
                        <img src={bookmark} alt="" />
                    </button>
                    <div className='icon-title'>Bookmarks</div>
                </StyledLinkButton>
                <StyledLinkButton to="notes" className='icon-with-title'>
                    <button className='icon'>
                        <img src={notes} alt="" />
                    </button>
                    <div className='icon-title'>Notes</div>
                </StyledLinkButton>

                <StyledLinkButton to="glossary" className='icon-with-title' >
                    <button className='icon'>
                        <img src={glossary} alt="" />
                    </button>
                    <div className='icon-title'>Glossary</div>
                </StyledLinkButton>
            </div>
        </>


    )
}

export default Footer