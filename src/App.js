import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import KeyWords from './screen/KeyWords';
import Notes from './screen/Notes';
import BookMark from './screen/BookMark';
import Glossary from './screen/Glossary';
import Header from './layout/Header';
import Preface from './screen/Preface';
import AboutTheBook from './screen/AboutTheBook';
import Quran from './screen/Quran';
import SignUp from './pages/SignUp';
import UserVerification from './pages/UserVerification';
import CreatePassword from './pages/CreatePassword';
import Settings from './screen/Settings';
import { FontSizeProvider } from './context/FontContext';
import { SideBarProvider } from './context/SideBarContext';
import Home from './screen/Home';


function App() {

  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <FontSizeProvider>
          <SideBarProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<SignUp />} />
              <Route path='/verify' element={<UserVerification />} />
              <Route path='/createpassword' element={<CreatePassword />} />
              <Route path='/home' element={<Home />} />
              <Route path='/preface' element={<Preface />} />
              <Route path='/aboutTheBook' element={<AboutTheBook />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/Chapters' element={<Chapters />} >
                <Route path='' element={<Quran />} />
                <Route path='keywords' element={<KeyWords />} />
                <Route path='glossary' element={<Glossary />} />
                <Route path='notes' element={<Notes />} />
                <Route path='bookmarks' element={<BookMark />} />
              </Route>
            </Routes>
          </SideBarProvider>
        </FontSizeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
