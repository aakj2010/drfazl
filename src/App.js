import './App.css';
import Header from '../src/layout/Header'
import Home from './screen/Home';
import { BrowserRouter } from 'react-router-dom';
import Footer from './layout/Footer';



function App() {
  return (
    <div className='mobile-screen'>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
