import './App.css';
import Header from '../src/layout/Header'
import Home from './screen/Home';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
