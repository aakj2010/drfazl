import './App.css';
import Login from './user/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chapters from './screen/Chapters';
import KeyWords from './screen/KeyWords';
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
// import { ActiveTabProvider } from './context/ActiveTabContext'
import Home from './screen/Home';
import { useContext, useState } from 'react';
import LanguageContext from './context/LanguageContext';
import LandingPage from './screen/LandingPage';
import ChapterList from './layout/ChapterList';
import Search from './layout/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './route/ProtectedRoute';
import { ActiveTabProvider } from './context/ActiveTab';


function App() {
  // const [activeTab, setActiveTab] = useState(0)
  let context = useContext(LanguageContext)
  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <ToastContainer theme='dark' />
        <FontSizeProvider>
          <SideBarProvider>
            <ActiveTabProvider>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                {/* <Route path='/verify' element={<UserVerification />} /> */}
                {/* <Route path='/createpassword' element={<CreatePassword />} /> */}
                <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='/preface' element={<ProtectedRoute><Preface /></ProtectedRoute>} />
                <Route path='/aboutTheBook' element={<ProtectedRoute><AboutTheBook /></ProtectedRoute>} />
                <Route path='/settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path='/chapters/chapter-list' element={<ChapterList />} />
                <Route path='/chapters/search' element={<Search />} />
                <Route path='/chapters' element={<ProtectedRoute><Chapters /></ProtectedRoute>} >
                  <Route path='' element={<Quran />} />
                  <Route path='keywords' element={<KeyWords />} />
                  <Route path='glossary' element={<Glossary />} />
                </Route>
                <Route path='/welcome' element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
              </Routes>
            </ActiveTabProvider>
          </SideBarProvider>
        </FontSizeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
// https://github.com/senthiltechspot/Whatsapp-Clone/blob/master/Backend/Controllers/Chat.controller.js