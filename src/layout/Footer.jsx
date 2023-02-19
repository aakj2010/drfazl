import './footer.css'
import chapter from '../Assets/chapter.svg'
import star from '../Assets/star.svg'
import notes from '../Assets/notes.svg'
import bookmark from '../Assets/bookmark.svg'
import glossary from '../Assets/glossary.svg'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material'


const StyledLinkButton = styled(NavLink)({
    textDecoration:'none',
    textAlign: 'center',
    color: '#fff',
    "&.active": {
        color: '#4B00C2',
        borderBottom: 3,
        borderBlockColor: '#4B00C2'
    }
})

function Footer() {


    return (
        <>
            <div className="icons-wrapper" >
                <StyledLinkButton to="" className='icon-with-title'>
                    <button className='icon'>
                        <img src={chapter} alt="" />
                    </button>
                    <div className='icon-title'>Chapter</div>
                </StyledLinkButton>
                <StyledLinkButton to="keywords" className='icon-with-title'>
                    <button className='icon'>
                        <img src={star} alt="" />
                    </button>
                    <div className='icon-title'>Keywords</div>
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