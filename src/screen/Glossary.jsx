import React from 'react'
import './glossary.css'

function Glossary() {
  return (
    <div className='glossary-wrapper'>
      <div className='g-title'>Glossary</div>
      <div className='explanation'>
        <div className='e-title'>Alif Laam Meem (Quran Explanation)</div>
        <div className='e-para'>On the home screen, you can browse your available textbooks and select one to
          start reading. You can also easily search for specific topics, keywords, or pages, as well as access
          your bookmarked pages and notes.
        </div>
      </div>
      <div className='g-title2'><p>Alif Laam Leem</p> </div>
      <div className='g-items'>
        <div className='g-items-title'><p>Alif-Allah</p></div>
        <div className='g-items-para'><p>On the home screen, you can browse your available textbooks and select one 
          to start reading. </p></div>
      </div>
      <div className='g-items'>
        <div className='g-items-title'><p>Laam - Almighty</p></div>
        <div className='g-items-para'><p>On the home screen, you can browse your available textbooks and select one 
          to start reading. </p></div>
      </div>
      <div className='g-items'>
        <div className='g-items-title'><p>Alif-Allah</p></div>
        <div className='g-items-para'><p>On the home screen, you can browse your available textbooks and select one 
          to start reading. </p></div>
      </div>
      <div className='empty'></div>
    </div>
  )
}

export default Glossary