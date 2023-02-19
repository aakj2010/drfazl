import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { styled } from '@mui/material'

const StyledLinkButton = styled(NavLink)({
    textDecoration: 'none',
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#4B00C2',
    "&.active": {
        borderBottom: 3,
        borderBottomColor: '#4B00C2'
    }
})

function Quran() {
    return (
        <>
            <div className='chapters'>
                <div className='img-container' >
                    <div className="bottom-left">Quran</div>
                </div>
                <div className='chapter-list-wrapper'>
                    <div className='chapter-list-items'>
                        <StyledLinkButton to='' className="list-items">1. Victory upon Victory</StyledLinkButton>
                        <StyledLinkButton to='2' className="list-items" >2. Pasu </StyledLinkButton>
                        <StyledLinkButton to='3' className="list-items">3. Imran’s Family</StyledLinkButton>
                        <StyledLinkButton to='4' className="list-items">4. Women</StyledLinkButton>
                        <StyledLinkButton to='5' className="list-items">5. Unavu maravai</StyledLinkButton>
                        <StyledLinkButton to='6' className="list-items">6. Kalnadaigal</StyledLinkButton>
                    </div>
                </div>
                <Outlet />
            </div>
        </>

    )
}

export default Quran