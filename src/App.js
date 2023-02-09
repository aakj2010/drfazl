import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import Portal from './screen/Portal';
import KeyWords from './screen/KeyWords';
import Notes from './screen/Notes';
import BookMark from './screen/BookMark';
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';
import Chapter3 from './Chapters/Chapter3';
import Chapter4 from './Chapters/Chapter4';
import Chapter5 from './Chapters/Chapter5';
import Chapter6 from './Chapters/Chapter6';



function App() {
  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portal />} >
            <Route path='' element={<Chapters />} >
              <Route index path='' element={<Chapter1 />} />
              <Route index path='chapter2' element={<Chapter2 />} />
              <Route index path='chapter3' element={<Chapter3 />} />
              <Route index path='chapter4' element={<Chapter4 />} />
              <Route index path='chapter5' element={<Chapter5 />} />
              <Route index path='chapter6' element={<Chapter6 />} />
            </Route>
            <Route path='keywords' element={<KeyWords />} />
            <Route path='notes' element={<Notes />} />
            <Route path='bookmarks' element={<BookMark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
