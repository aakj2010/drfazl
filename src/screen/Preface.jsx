import React, { useContext } from 'react'
import FontContext from '../context/FontContext'
import Header from '../layout/Header';
import './Preface.css'

function AboutTheBook() {

  let context = useContext(FontContext);

  return (
    <>
      <Header />
      <div className='preface' style={{ fontSize: `${context.fontSize}px` }}>
        <div className='p-title' style={{ fontSize: `${context.fontSize}px` }}>About The Book</div>
        <p className='p-para' style={{ fontSize: `${context.fontSize}px` }}>On the home screen, you can browse your available textbooks and select one to start reading.
          You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked
          pages and notes. In the textbook screen, you can navigate through the pages by swiping or tapping. The
          app allows you to highlight important information and take notes, making studying and learning more
          interactive and efficient. With Textbook Pro,
          you'll have all your textbooks in one convenient place, accessible anytime and anywhere.</p>
        <p className='p-para' style={{ fontSize: `${context.fontSize}px` }}>On the home screen, you can browse your available textbooks and select one to start reading.
          You can also easily search for specific topics, keywords, or pages, as well as access your bookmarked
          pages and notes. In the textbook screen, you can navigate through the pages by swiping or tapping. The
          app allows you to highlight important information and take notes, making studying and learning more
          interactive and efficient. With Textbook Pro,
          you'll have all your textbooks in one convenient place, accessible anytime and anywhere.</p>
      </div>
    </>
  )
}

export default AboutTheBook