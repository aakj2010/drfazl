import React, { useContext } from 'react'
import './Settings.css'
import FontContext from '../context/FontContext'
import LanguageContext from '../context/LanguageContext'
import Tamil from '../demo/Tamil'
import English from '../demo/English'
import Header from '../layout/Header'
import { NavLink } from 'react-router-dom'


const Settings = () => {
    let context = useContext(FontContext)

    let languageContext = useContext(LanguageContext);
    // const [save, setSave] = useState(fontSize)

    return (
        <>
            <Header />
            <div className='settings-wrapper'>
                <div className='settings-container'>
                    <div className='settings-box'>
                        <div className='lang-box'>
                            <p>Change Language</p>
                            <div className='btn-box'>
                                <button className={languageContext.language === 'Tamil' ? 'active-eng-btn' : 'bi-ling-btn'} onClick={() => languageContext.setLanguage("Tamil")}>தமிழ்</button>
                                <button className={languageContext.language === 'English' ? 'active-eng-btn' : 'bi-ling-btn'} onClick={() => languageContext.setLanguage("English")}>English</button>
                                <button className={languageContext.language === 'bi-lingual' ? 'active-eng-btn' : 'bi-ling-btn'}>Bi-lingual</button>
                            </div>
                        </div>
                        <div className='lang-box'>
                            <p>Font Size</p>
                            <div className='btn-box'>
                                <button 
                                    className={context.fontSize === 12 ? 'active-eng-btn' : 'bi-ling-btn'}
                                    onClick={() => context.setFontSize(12)}
                                    >Small
                                </button>
                                <button 
                                    className={context.fontSize === 14 ? 'active-eng-btn' : 'bi-ling-btn'}
                                    onClick={() => context.setFontSize(14)}
                                    >Default
                                </button>
                                <button 
                                    className={context.fontSize === 16 ? 'active-eng-btn' : 'bi-ling-btn'}
                                    onClick={() => context.setFontSize(16)}
                                    >Large
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='demo-box'>
                        {
                            languageContext.language === 'Tamil' && <Tamil />
                        }
                        {
                            languageContext.language === 'English' && <English />
                        }
                    </div>
                </div>
                <div className='go-to-btn-box'>
                    <NavLink to='/chapters'>
                        <button className='go-to-btn'>Go to chapters</button>
                    </NavLink>
                </div>
            </div >
        </>

    )
}

export default Settings