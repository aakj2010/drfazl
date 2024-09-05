import React, { useState, useContext } from 'react';
import './Header.css';
import search from '../Assets/search.svg';
import menu from '../Assets/menu.svg';
import { useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import SideBarContext from '../context/SideBarContext';
import LanguageContext from '../context/LanguageContext';
import Modal from 'react-modal'; // Import react-modal
import ChapterList from './ChapterList';
import Search from './Search';


// Set up app element for accessibility
Modal.setAppElement('#root');

function Header({ activeTab, setActiveTab }) {
    const SideBarcontext = useContext(SideBarContext);
    const languageContext = useContext(LanguageContext);
    const [isChapterListModalOpen, setIsChapterListModalOpen] = useState(false); // State for ChapterList modal
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    // Mapping object for title translations
    const titleTranslations = {
        'Chapters': 'அத்தியாயங்கள்',
        'Glossary': 'பிற்சேர்க்கை',
        'Settings': 'அமைப்புகள்',
        'Keywords': 'கலைச்சொல்',
        'AboutTheBook': 'அணிந்துரை',
        'Preface': 'முன்னுரை'
    };

    const location = useLocation();
    const result = location.pathname.split('/');
    const title = result[2] ? result[2].charAt(0).toUpperCase() + result[2].slice(1) : result[1].charAt(0).toUpperCase() + result[1].slice(1);

    const handleChapterListModalOpen = () => {
        setIsChapterListModalOpen(true);
    };

    const handleSearchModalOpen = () => {
        setIsSearchModalOpen(true);
    };

    const handleModalClose = () => {
        setIsChapterListModalOpen(false);
        setIsSearchModalOpen(false);
    };

    return (
        <>
            <header className='m-header-wrapper'>
                <div className='menu-title'>
                    <div className='menu-btn-wrapper'>
                        <button className='menu-btn' onClick={SideBarcontext.toggleSidebar}>
                            <img src={menu} alt="menu" />
                            {SideBarcontext.sidebarOpen ? <SideBar /> : null}
                        </button>
                    </div>
                    <div>
                        {title === 'Chapters' ? (
                            <div className='title'>
                                {languageContext.language === 'English' && title ? title : titleTranslations[title]}
                                <span className='cl-header-length' onClick={handleChapterListModalOpen}>
                                    114
                                </span>
                            </div>
                        ) : (
                            <div className='title'>
                                {languageContext.language === 'English' && title ? title : titleTranslations[title]}
                            </div>
                        )}
                    </div>
                </div>
                {(title === 'Chapters' || title === 'Keywords') && (
                    <div className='help-with-search'>
                        <div className='menu-btn-wrapper' onClick={handleSearchModalOpen}>
                            <img src={search} alt="search" />
                        </div>
                    </div>
                )}
            </header>

            <Modal
                isOpen={isChapterListModalOpen}
                onRequestClose={handleModalClose}
                className="modal-content"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 99999,
                    }
                }}
            >
                <ChapterList setIsChapterListModalOpen={setIsChapterListModalOpen} />
            </Modal>
            <Modal
                isOpen={isSearchModalOpen}
                onRequestClose={handleModalClose}
                className="modal-content"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 99999,
                    }
                }}
            >
                <Search setIsSearchModalOpen={setIsSearchModalOpen} />
            </Modal>
        </>
    );
}

export default Header;
