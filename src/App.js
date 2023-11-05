import './App.css';
import Login from './user/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import KeyWords from './screen/KeyWords';
import Notes from './screen/Notes';
import BookMark from './screen/BookMark';
import Glossary from './screen/Glossary';
import Preface from './screen/Preface';
import AboutTheBook from './screen/AboutTheBook';
import Quran from './screen/Quran';
import SignUp from './user/SignUp';
// import UserVerification from './pages/UserVerification';
// import CreatePassword from './pages/CreatePassword';
import Settings from './screen/Settings';
import { FontSizeProvider } from './context/FontContext';
import { SideBarProvider } from './context/SideBarContext';
import Home from './screen/Home';
import { useContext, useState } from 'react';
import LanguageContext from './context/LanguageContext';
import LandingPage from './screen/LandingPage';
// import TamilWelcome from './screen/TamilWelcome';
import ChapterList from './layout/ChapterList';
import Search from './layout/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [activeTab, setActiveTab] = useState(0)
  let context = useContext(LanguageContext)
  return (
    <div className='mobile-screen'>
      <BrowserRouter>
      <ToastContainer theme='dark' />
        <FontSizeProvider>
          <SideBarProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<SignUp />} />
              {/* <Route path='/verify' element={<UserVerification />} /> */}
              {/* <Route path='/createpassword' element={<CreatePassword />} /> */}
              <Route path='/home' element={<Home />} />
              <Route path='/preface' element={<Preface />} />
              <Route path='/aboutTheBook' element={<AboutTheBook />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/Chapters/chapter-list' element={<ChapterList activeTab={activeTab} setActiveTab={setActiveTab} />} />
              <Route path='/Chapters/search' element={<Search activeTab={activeTab} setActiveTab={setActiveTab} />} />
              <Route path='/Chapters' element={<Chapters />} >
                <Route path='' element={<Quran activeTab={activeTab} setActiveTab={setActiveTab} />} />
              </Route>
              <Route path='/welcome' element={<LandingPage />} />
              {/* {
                context.language === 'English' &&
                (
                )
              }
              {
                context.language === 'Tamil' &&
                (
                  <Route path='/welcome' element={<TamilWelcome />} />
                )
              } */}
              {
                context.language === 'English' &&
                (
                  <Route path='/Chapters' element={<Chapters />} >
                    <Route path='keywords' element={<KeyWords />} />
                    <Route path='glossary' element={<Glossary />} />
                    <Route path='notes' element={<Notes />} />
                    <Route path='bookmarks' element={<BookMark />} />
                  </Route>
                )
              }
              {
                context.language === 'Tamil' &&
                (
                  <Route path='/Chapters' element={<Chapters />} >
                    <Route path='keywords' element={<KeyWords />} />
                    <Route path='glossary' element={<Glossary />} />
                    <Route path='notes' element={<Notes />} />
                    <Route path='bookmarks' element={<BookMark />} />
                  </Route>
                )
              }
            </Routes>
          </SideBarProvider>
        </FontSizeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
