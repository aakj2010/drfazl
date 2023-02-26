import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import KeyWords from './screen/KeyWords';
import Notes from './screen/Notes';
import BookMark from './screen/BookMark';
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';
import Chapter3 from './Chapters/Chapter3';
import Chapter4 from './Chapters/Chapter4';
import Chapter5 from './Chapters/Chapter5';
import Chapter6 from './Chapters/Chapter6';
import Glossary from './screen/Glossary';
import Header from './layout/Header';
import Preface from './screen/Preface';
import AboutTheBook from './screen/AboutTheBook';
import Quran from './screen/Quran';
import SignUp from './pages/SignUp';
import UserVerification from './pages/UserVerification';
import CreatePassword from './pages/CreatePassword';
import Settings from './screen/Settings';


function App() {

  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/verify' element={<UserVerification />} />
          <Route path='/createpassword' element={<CreatePassword />} />
          <Route path='/preface' element={<Preface />} />
          <Route path='/aboutTheBook' element={<AboutTheBook />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/Chapters' element={<Chapters />} >
            <Route path='' element={<Quran />}>
              <Route index element={<Chapter1 />} />
              <Route path='2' element={<Chapter2 />} />
              <Route path='3' element={<Chapter3 />} />
              <Route path='4' element={<Chapter4 />} />
              <Route path='5' element={<Chapter5 />} />
              <Route path='6' element={<Chapter6 />} />
            </Route>
            <Route path='keywords' element={<KeyWords />} />
            <Route path='glossary' element={<Glossary />} />
            <Route path='notes' element={<Notes />} />
            <Route path='bookmarks' element={<BookMark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
