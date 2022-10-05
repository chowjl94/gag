import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Generate from './components/Generate';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar></Navbar>
      <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/generate' element={<Generate />} />
          </Routes>
      </BrowserRouter>
      <Footer></Footer>

      </div>    
    </div>

  );
}

export default App;
