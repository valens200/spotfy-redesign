
// import './index.css';
import './index.css'
import Navbar from './components/Navbar';
import Discover from './pages/Discover'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './pages/Join';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/join'  element={ <Join />}></Route>
      <Route path='/'  element={ <Home />}></Route>
      <Route path='/Discover'  element={ <Discover />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
