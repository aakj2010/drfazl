// import React, { useContext } from 'react';
// import './keywords.css';
// import Tamil_Kalaisol from '../Content/tam-Kalaisol.json';
// import htmlToReactParser from 'html-react-parser';
// import FontContext from '../context/FontContext';
// import { useNavigate } from 'react-router-dom';

// function KeyWords({ setActiveTab }) {
//   const context = useContext(FontContext);
//   const navigate = useNavigate();
//   const data = Tamil_Kalaisol;
//   const chapters = data.chapters || [];
//   const handleClick = (index, number) => {
//     setActiveTab(index)
//     navigate(`/chapters#${number}`);
//   }

//   return (
//     <div className='keywords-wrapper'>
//       {chapters.map((chapter) => (
//         <div className='keyword-container' key={chapter.number}>
//           {chapter.verses.map((item, index) => (
//             <div className='kw-verse' id={index + 1} key={item.number}
//               onClick={() => { handleClick(item.Link - 1, item.link2) }}
//             >
//               <div className='kw-number-icon'>
//                 <div className='kw-serial'>{item.number}</div>
//               </div>

//               <div className='kw-para' style={{
//                 fontSize: `${context.fontSize}px`
//               }}>
//                 {htmlToReactParser(item.text)}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default KeyWords;

import { CellMeasurer, AutoSizer, CellMeasurerCache, List } from 'react-virtualized';
import React, { useContext } from 'react';
import './keywords.css';
import Tamil_Kalaisol from '../Content/tam-Kalaisol.json';
import htmlToReactParser from 'html-react-parser';
import FontContext from '../context/FontContext';
import { useNavigate } from 'react-router-dom';
import ActiveTabContext from '../context/ActiveTab';
import { useEffect } from 'react';

function KeyWords() {
  const context = useContext(FontContext);
  const navigate = useNavigate();
  const data = Tamil_Kalaisol;
  const chapters = data.chapters || [];
  const tab = useContext(ActiveTabContext);

  // const handleClick = (index, number) => {
  //   tab.setActiveTab(index);
  //   navigate(`/chapters#${number}`);
  // };
  // const handleClick = (number) => {
  //   console.log("clicked")
  //   const number1 = parseInt(number.split('.')[0]);
  //   tab.setActiveTab(number1 - 1);
  //   navigate(`/chapters#${number}`);
  // };
  const handleClick = (number) => {
    console.log("clicked", number);

    // Ensure `number` is a string
    const numberStr = number.toString();

    // Now you can safely call .split()
    const number1 = parseInt(numberStr.split('.')[0]);

    tab.setActiveTab(number1 - 1);
    navigate(`/chapters#${number}`);
  };
  useEffect(() => {
    let verseNumberFromUrl = window.location.hash.substring(1);
    verseNumberFromUrl = verseNumberFromUrl + '...'
    setTimeout(() => {
      const verseRefFromUrl = document.getElementById(verseNumberFromUrl);
      if (verseRefFromUrl) {
        verseRefFromUrl.classList.add('scroll-margin-temp');
        verseRefFromUrl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Remove the temporary class after scrolling
        setTimeout(() => {
          verseRefFromUrl.classList.remove('scroll-margin-temp');
        }, 1000); // Adjust this timeout as needed
      }
    }, 500);
  }, []);

  // Cache for dynamic row heights
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100, // Adjust based on your content
  });

  // Render each row
  const rowRenderer = ({ key, index, parent, style }) => {
    const chapter = chapters[index];
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        columnIndex={0}
        rowIndex={index}
        parent={parent}
      >
        <div className='keyword-container' style={style}>
          {chapter.verses.map((item, idx) => (
            <div className='kw-verse' id={item.number} key={item.number}>
              <div className='kw-number-icon'>
                <div className='kw-serial'>
                  {item.number}
                </div>
              </div>

              <div className='kw-para flex flex-col' style={{ fontSize: `${context.fontSize}px` }}>
                <div className="flex gap-1 !text-primary700 font-bold">{item.Links?.map((link, index) => (
                  <p key={index} onClick={() => { handleClick(link) }}>{link}</p>
                ))}</div>
                {htmlToReactParser(item.text)}
                {/* {item.text} */}
              </div>
            </div>
          ))}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <div className='keywords-wrapper' style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <AutoSizer>
        {({ height, width, scrollToIndex }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowCount={chapters.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            scrollToIndex={scrollToIndex}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default KeyWords;



