import React from 'react'
import './Header.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header() {
    return (
        <header className='m-header-wrapper'>
            <div className='menu-title'>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn'>
                        <MenuRoundedIcon fontSize='small' />
                    </button>
                </div>
                <div className='title'>
                    Chapter
                </div>
            </div>

            <div className='help-with-search'>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn'>
                        <HelpOutlineRoundedIcon fontSize='small' />
                    </button>
                </div>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn'>
                        <SearchRoundedIcon fontSize='small' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header