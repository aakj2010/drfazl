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

function KeyWords({ setActiveTab }) {
  const context = useContext(FontContext);
  const navigate = useNavigate();
  const data = Tamil_Kalaisol;
  const chapters = data.chapters || [];

  const handleClick = (index, number) => {
    setActiveTab(index);
    navigate(`/chapters#${number}`);
  };

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
            <div className='kw-verse' id={idx + 1} key={item.number}
              onClick={() => { handleClick(item.Link - 1, item.link2) }}
            >
              <div className='kw-number-icon'>
                <div className='kw-serial'>{item.number}</div>
              </div>

              <div className='kw-para' style={{ fontSize: `${context.fontSize}px` }}>
                {htmlToReactParser(item.text)}
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
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowCount={chapters.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default KeyWords;



