import React from 'react'
import './keywords.css'
import more from '../Assets/more.svg'

function KeyWords() {
  return (
    <div className='keywords-wrapper'>
      <div className='keyword-container'>
        <div className='kw-number-icon'>
          <div className='kw-serial'>1...</div>
          <div className='kw-icon'><img src={more} alt="" /></div>
        </div>

        <div className='kw-para'>
          <span className='kw-num'>2.26</span> ... On the home screen, you can browse your available textbooks and select one to start reading. You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked pages and notes.
        </div>
        <div className='kw-more'>Also see <span className='kw-num'>2.26</span><span className='kw-num'>2.26</span></div>
      </div>

      <div className='keyword-container'>
        <div className='kw-number-icon'>
          <div className='kw-serial'>2...</div>
          <div className='kw-icon'><img src={more} alt="" /></div>
        </div>
        <div className='kw-para'>
          <span className='kw-num'>2.26</span> ... On the home screen, you can browse your available textbooks and select one to start reading. You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked pages and notes.
        </div>
      </div>

      <div className='keyword-container'>
        <div className='kw-number-icon'>
          <div className='kw-serial'>3...</div>
          <div className='kw-icon'><img src={more} alt="" /></div>
        </div>

        <div className='kw-para'>
          <span className='kw-num'>2.26</span> ... On the home screen, you can browse your available textbooks and select one to start reading. You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked pages and notes.
        </div>
      </div>
      <div className='keyword-container'>
        <div className='kw-number-icon'>
          <div className='kw-serial'>3...</div>
          <div className='kw-icon'><img src={more} alt="" /></div>
        </div>

        <div className='kw-para'>
          <span className='kw-num'>2.26</span> ... On the home screen, you can browse your available textbooks and select one to start reading. You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked pages and notes.
        </div>
      </div>
      <div className='keyword-container'>
        <div className='kw-number-icon'>
          <div className='kw-serial'>3...</div>
          <div className='kw-icon'><img src={more} alt="" /></div>
        </div>

        <div className='kw-para'>
          <span className='kw-num'>2.26</span> ... On the home screen, you can browse your available textbooks and select one to start reading. You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked pages and notes.
        </div>
      </div>
      <div className='empty'></div>
    </div>
  )
}

export default KeyWords