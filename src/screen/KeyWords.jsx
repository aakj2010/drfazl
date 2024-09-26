import { CellMeasurer, AutoSizer, CellMeasurerCache, List } from 'react-virtualized';
import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import './keywords.css';
import htmlToReactParser from 'html-react-parser';
import FontContext from '../context/FontContext';
import { useNavigate } from 'react-router-dom';
import ActiveTabContext from '../context/ActiveTab';
import Tamil_Kalaisol from '../Content/updated-tam-kalaisol.json';
import Modal from 'react-modal'; // You can use any modal library
import QuranSearch from '../layout/QuranSearch';

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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeywordSearch = useCallback((query) => {
    setSearchQuery(query);  // Store the search query that was clicked
    setIsSearchModalOpen(true);  // Open the modal to display search results
  }, [setSearchQuery, setIsSearchModalOpen]);
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
                      <p key={index} onClick={() => handleKeywordSearch(link)}>{link}...</p>
                    ))}
                  </div>

                  {htmlToReactParser(item.text, {
                    replace: (domNode) => {
                      if (domNode.type === 'tag' && domNode.name === 'span') {
                        const number = domNode.children[0]?.data;
                        if (number) {
                          return (
                            <span className='font-bold inline-block' onClick={() => handleKeywordSearch(number)}>
                              ({number})
                            </span>
                          );
                        }
                      }
                    },
                  })}

                  <div className='flex gap-1 font-bold'>
                    {item.RefLinks?.map((link, index) => (
                      <p key={index} onClick={() => handleKeywordSearch(link)}>{link},</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CellMeasurer>
      );
    },
    [cache, handleKeywordSearch, visibleData, context.fontSize]
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

      {/* Modal to show search results */}
      <Modal
        isOpen={isSearchModalOpen}
        onRequestClose={() => setIsSearchModalOpen(false)}
        className="modal-content-quran"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99999,
          }
        }}
      >
        <QuranSearch
          setIsSearchModalOpen={setIsSearchModalOpen}  // Pass modal control function
          searchQuery={searchQuery}  // Pass the search query to search in Quran or other data
        />

      </Modal>
    </div>
  );
}

export default KeyWords;
