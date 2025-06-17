import './App.css';
import Login from './user/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Chapters from './screen/Chapters';
import Glossary from './screen/Glossary';
import Preface from './screen/Preface';
import AboutTheBook from './screen/AboutTheBook';
import Quran from './screen/Quran';
import SignUp from './user/SignUp';
import Settings from './screen/Settings';
import { FontSizeProvider } from './context/FontContext';
import { SideBarProvider } from './context/SideBarContext';
import Home from './screen/Home';
import { lazy, Suspense } from 'react';
import LandingPage from './screen/LandingPage';
import ChapterList from './layout/ChapterList';
import Search from './layout/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ActiveTabProvider } from './context/ActiveTab';
import Loader from './layout/Loader';
import { useAuthContext } from './hooks/useAuthContext';
import ForgotPassword from './user/ForgotPassword';
const KeyWords = lazy(() => import('./screen/KeyWords'));

function App() {
  const { user, isAuthReady } = useAuthContext()
  return (
    <div className='mobile-screen max-w-2xl mx-auto w-full '>
      <BrowserRouter>
        <ToastContainer theme='dark' />
        <FontSizeProvider>
          <SideBarProvider>
            <ActiveTabProvider>
              {
                isAuthReady && (
                  <Routes>
                    <Route path='/' element={!user ? <Login /> : <Navigate to='/welcome' />} />
                    <Route path='/register' element={!user ? <SignUp /> : <Navigate to='/welcome' />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/home' element={user ? <Home /> : <Navigate to='/' />} />
                    <Route path='/preface' element={<Preface />} />
                    <Route path='/aboutTheBook' element={<AboutTheBook />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/chapters/chapter-list' element={<ChapterList />} />
                    <Route path='/chapters/search' element={<Search />} />
                    <Route path='/chapters' element={<Chapters />} >
                      <Route path='/chapters' element={
                        <Suspense fallback={<Loader />}>
                          <Quran />
                        </Suspense>
                      } />

                      <Route path='keywords' element={
                        <Suspense fallback={<Loader />}>
                          <KeyWords />
                        </Suspense>
                      } />
                      <Route path='glossary' element={<Glossary />} />
                    </Route>
                    <Route path='/welcome' element={user ? <LandingPage /> : <Navigate to='/' />} />
                  </Routes>
                )
              }
            </ActiveTabProvider>
          </SideBarProvider>
        </FontSizeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
// https://github.com/senthiltechspot/Whatsapp-Clone/blob/master/Backend/Controllers/Chat.controller.js