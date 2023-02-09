import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import Portal from './screen/Portal';
import KeyWords from './screen/KeyWords';
import Notes from './screen/Notes';
import BookMark from './screen/BookMark';
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';



function App() {
  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portal />} >
            <Route path='' element={<Chapters />} >
              <Route index path='' element={<Chapter1 />} />
              <Route index path='chapter2' element={<Chapter2 />} />
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
