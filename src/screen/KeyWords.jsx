// import { CellMeasurer, AutoSizer, CellMeasurerCache, List } from 'react-virtualized';
// import React, { useContext } from 'react';
// import './keywords.css';
// import Tamil_Kalaisol from '../Content/updated-tam-kalaisol.json';
// import htmlToReactParser from 'html-react-parser';
// import FontContext from '../context/FontContext';
// import { Link, useNavigate } from 'react-router-dom';
// import ActiveTabContext from '../context/ActiveTab';
// import { useEffect } from 'react';
// import { useMemo } from 'react';

// function KeyWords() {
//   const context = useContext(FontContext);
//   const navigate = useNavigate();
//   // const data = Tamil_Kalaisol;
//   // const chapters = data.chapters || [];
//   const chapters = useMemo(() => Tamil_Kalaisol.chapters || [], [Tamil_Kalaisol]);

//   const tab = useContext(ActiveTabContext);

//   const handleClick = (number) => {
//     console.log("clicked", number);

//     // Ensure `number` is a string
//     const numberStr = number.toString();

//     // Now you can safely call .split()
//     const number1 = parseInt(numberStr.split('.')[0]);

//     tab.setActiveTab(number1 - 1);
//     navigate(`/chapters#${number}`);
//   };
//   useEffect(() => {
//     let verseNumberFromUrl = window.location.hash.substring(1);
//     verseNumberFromUrl = verseNumberFromUrl + '...'
//     setTimeout(() => {
//       const verseRefFromUrl = document.getElementById(verseNumberFromUrl);
//       if (verseRefFromUrl) {
//         verseRefFromUrl.classList.add('scroll-margin-keywords');
//         verseRefFromUrl.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//         // Remove the temporary class after scrolling
//         setTimeout(() => {
//           verseRefFromUrl.classList.remove('scroll-margin-keywords');
//         }, 1000); // Adjust this timeout as needed
//       }
//     }, 500);
//   }, []);

//   // Cache for dynamic row heights
//   const cache = new CellMeasurerCache({
//     fixedWidth: true,
//     defaultHeight: 100, // Adjust based on your content
//   });

//   // Render each row
//   const rowRenderer = ({ key, index, parent, style }) => {
//     const chapter = chapters[index];
//     return (
//       <CellMeasurer
//         key={key}
//         cache={cache}
//         columnIndex={0}
//         rowIndex={index}
//         parent={parent}
//       >
//         <div className='keyword-container' style={style}>
//           {chapter.verses.map((item, idx) => (
//             <div className='kw-verse' id={item.number} key={item.number}>
//               <div className='kw-number-icon'>
//                 <div className='kw-serial'>
//                   {item.number}
//                 </div>
//               </div>

//               <div className='kw-para flex flex-col' style={{ fontSize: `${context.fontSize}px` }}>
//                 <div className="flex gap-1 font-bold">{item.Links?.map((link, index) => (
//                   <p key={index} onClick={() => { handleClick(link) }}>{link}...</p>
//                 ))}</div>
//                 {htmlToReactParser(item.text, {
//                   replace: (domNode) => {
//                     // Check if the domNode is an element
//                     if (domNode.type === 'tag' && domNode.name === 'span') {
//                       // Check for any <Link> like structure and extract the link text
//                       const number = domNode.children[0]?.data;
//                       if (number) {
//                         return (
//                           <Link className='font-bold w-max !inline-block' to={`/chapters#${number}`}>
//                             <span className='font-bold inline-block' onClick={() => { handleClick(number) }}>({number})</span>
//                           </Link>
//                         );
//                       }
//                     }
//                   },
//                 })}
//                 <div className="flex gap-1 font-bold">{item.RefLinks?.map((link, index) => (
//                   <p key={index} onClick={() => { handleClick(link) }}>{link},</p>
//                 ))}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CellMeasurer>
//     );
//   };

//   return (
//     <div className='keywords-wrapper' style={{ position: 'relative', height: '100vh', width: '100%' }}>
//       <AutoSizer>
//         {({ height, width, scrollToIndex }) => (
//           <List
//             width={width}
//             height={height}
//             deferredMeasurementCache={cache}
//             rowCount={chapters.length}
//             rowHeight={cache.rowHeight}
//             rowRenderer={rowRenderer}
//             overscanRowCount={5}
//             scrollToIndex={scrollToIndex}
//           />
//         )}
//       </AutoSizer>
//     </div>
//   );
// }

// export default KeyWords;

import { CellMeasurer, AutoSizer, CellMeasurerCache, List } from 'react-virtualized';
import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import './keywords.css';
import htmlToReactParser from 'html-react-parser';
import FontContext from '../context/FontContext';
import { Link, useNavigate } from 'react-router-dom';
import ActiveTabContext from '../context/ActiveTab';
import Tamil_Kalaisol from '../Content/updated-tam-kalaisol.json';

function KeyWords() {
  const context = useContext(FontContext);
  const navigate = useNavigate();
  const tab = useContext(ActiveTabContext);

  // Cache for dynamic row heights
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 200, // Adjust based on average content height
      }),
    []
  );

  // Lazy load data in chunks or paginate if possible
  const [visibleData, setVisibleData] = useState([]);

  // Memoize chapters to avoid recalculating on each render
  const chapters = useMemo(() => Tamil_Kalaisol.chapters || [], []);

  // Simulate lazy loading by showing a limited number of items at the beginning
  useEffect(() => {
    setVisibleData(chapters.slice(0, 10)); // Load first 50 chapters initially
  }, [chapters]);

  const loadMoreItems = useCallback(() => {
    if (visibleData.length < chapters.length) {
      setVisibleData((prevData) => chapters.slice(0, prevData.length + 10)); // Load in chunks of 50
    }
  }, [chapters, visibleData.length]);

  const handleClick = (number) => {
    const numberStr = number.toString();
    const number1 = parseInt(numberStr.split('.')[0]);

    tab.setActiveTab(number1 - 1);
    navigate(`/chapters#${number}`);
  };

  useEffect(() => {
    let verseNumberFromUrl = window.location.hash.substring(1);
    verseNumberFromUrl = verseNumberFromUrl + '...';
    setTimeout(() => {
      const verseRefFromUrl = document.getElementById(verseNumberFromUrl);
      if (verseRefFromUrl) {
        verseRefFromUrl.classList.add('scroll-margin-keywords');
        verseRefFromUrl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setTimeout(() => {
          verseRefFromUrl.classList.remove('scroll-margin-keywords');
        }, 1000);
      }
    }, 500);
  }, []);

  // Memoized row renderer to avoid re-renders on each scroll
  const rowRenderer = useCallback(
    ({ key, index, parent, style }) => {
      const chapter = visibleData[index];

      return (
        <CellMeasurer
          key={key}
          cache={cache}
          columnIndex={0}
          rowIndex={index}
          parent={parent}
        >
          <div className='keyword-container' style={style}>
            {chapter?.verses.map((item) => (
              <div className='kw-verse' id={item.number} key={item.number}>
                <div className='kw-number-icon'>
                  <div className='kw-serial'>{item.number}</div>
                </div>

                <div className='kw-para flex flex-col' style={{ fontSize: `${context.fontSize}px` }}>
                  <div className='flex gap-1 font-bold'>
                    {item.Links?.map((link, index) => (
                      <p key={index} onClick={() => handleClick(link)}>{link}...</p>
                    ))}
                  </div>

                  {htmlToReactParser(item.text, {
                    replace: (domNode) => {
                      if (domNode.type === 'tag' && domNode.name === 'span') {
                        const number = domNode.children[0]?.data;
                        if (number) {
                          return (
                            <Link className='font-bold w-max !inline-block' to={`/chapters#${number}`}>
                              <span className='font-bold inline-block' onClick={() => handleClick(number)}>
                                ({number})
                              </span>
                            </Link>
                          );
                        }
                      }
                    },
                  })}

                  <div className='flex gap-1 font-bold'>
                    {item.RefLinks?.map((link, index) => (
                      <p key={index} onClick={() => handleClick(link)}>{link},</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CellMeasurer>
      );
    },
    [cache, handleClick, visibleData, context.fontSize]
  );

  return (
    <div className='keywords-wrapper' style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowCount={visibleData.length} // Only render visible data
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            onRowsRendered={({ stopIndex }) => {
              if (stopIndex + 1 === visibleData.length) {
                loadMoreItems(); // Load more when scrolling reaches end
              }
            }}
            overscanRowCount={5} // Render extra rows outside view for smoother scrolling
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default KeyWords;

// import { CellMeasurer, AutoSizer, CellMeasurerCache, List } from 'react-virtualized';
// import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
// import './keywords.css';
// import htmlToReactParser from 'html-react-parser';
// import FontContext from '../context/FontContext';
// import { Link, useNavigate } from 'react-router-dom';
// import ActiveTabContext from '../context/ActiveTab';
// import Loader from '../layout/Loader';

// function KeyWords() {
//   const context = useContext(FontContext);
//   const navigate = useNavigate();
//   const tab = useContext(ActiveTabContext);

//   // Cache for dynamic row heights
//   const cache = useMemo(
//     () =>
//       new CellMeasurerCache({
//         fixedWidth: true,
//         defaultHeight: 200, // Adjust based on average content height
//       }),
//     []
//   );

//   // Lazy load data asynchronously
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Async function to load data
//   const loadData = async () => {
//     setLoading(true);
//     try {
//       // Dynamically import JSON file (this happens asynchronously)
//       const response = await import('../Content/updated-tam-kalaisol.json');
//       setData(response.default.chapters || []);
//     } catch (error) {
//       console.error('Error loading data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load data once on mount
//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleClick = (number) => {
//     const numberStr = number.toString();
//     const number1 = parseInt(numberStr.split('.')[0]);

//     tab.setActiveTab(number1 - 1);
//     navigate(`/chapters#${number}`);
//   };

//   useEffect(() => {
//     let verseNumberFromUrl = window.location.hash.substring(1);
//     verseNumberFromUrl = verseNumberFromUrl + '...';
//     setTimeout(() => {
//       const verseRefFromUrl = document.getElementById(verseNumberFromUrl);
//       if (verseRefFromUrl) {
//         verseRefFromUrl.classList.add('scroll-margin-keywords');
//         verseRefFromUrl.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//         setTimeout(() => {
//           verseRefFromUrl.classList.remove('scroll-margin-keywords');
//         }, 1000);
//       }
//     }, 500);
//   }, []);

//   // Memoized row renderer to avoid re-renders on each scroll
//   const rowRenderer = useCallback(
//     ({ key, index, parent, style }) => {
//       const chapter = data[index];

//       return (
//         <CellMeasurer
//           key={key}
//           cache={cache}
//           columnIndex={0}
//           rowIndex={index}
//           parent={parent}
//         >
//           <div className='keyword-container' style={style}>
//             {chapter?.verses.map((item) => (
//               <div className='kw-verse' id={item.number} key={item.number}>
//                 <div className='kw-number-icon'>
//                   <div className='kw-serial'>{item.number}</div>
//                 </div>

//                 <div className='kw-para flex flex-col' style={{ fontSize: `${context.fontSize}px` }}>
//                   <div className='flex gap-1 font-bold'>
//                     {item.Links?.map((link, index) => (
//                       <p key={index} onClick={() => handleClick(link)}>{link}...</p>
//                     ))}
//                   </div>

//                   {htmlToReactParser(item.text, {
//                     replace: (domNode) => {
//                       if (domNode.type === 'tag' && domNode.name === 'span') {
//                         const number = domNode.children[0]?.data;
//                         if (number) {
//                           return (
//                             <Link className='font-bold w-max !inline-block' to={`/chapters#${number}`}>
//                               <span className='font-bold inline-block' onClick={() => handleClick(number)}>
//                                 ({number})
//                               </span>
//                             </Link>
//                           );
//                         }
//                       }
//                     },
//                   })}

//                   <div className='flex gap-1 font-bold'>
//                     {item.RefLinks?.map((link, index) => (
//                       <p key={index} onClick={() => handleClick(link)}>{link},</p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CellMeasurer>
//       );
//     },
//     [cache, handleClick, data, context.fontSize]
//   );

//   return (
//     <div className='keywords-wrapper' style={{ position: 'relative', height: '100vh', width: '100%' }}>
//       {loading ? (
//         <Loader /> // Loading spinner while fetching data
//       ) : (
//         <AutoSizer>
//           {({ height, width }) => (
//             <List
//               width={width}
//               height={height}
//               deferredMeasurementCache={cache}
//               rowCount={data.length} // Only render visible data
//               rowHeight={cache.rowHeight}
//               rowRenderer={rowRenderer}
//               overscanRowCount={5} // Render extra rows outside view for smoother scrolling
//             />
//           )}
//         </AutoSizer>
//       )}
//     </div>
//   );
// }

// export default KeyWords;


