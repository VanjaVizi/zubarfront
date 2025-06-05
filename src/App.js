import logo from './logo.svg';
import './App.css';
import { Pocetna } from './pages/Pocetna';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Navbar from './components/navigacija/Navbar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
      <>  
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
         
        </Routes>
      </BrowserRouter> 
      
     
      
      
      
      </>
  );
}

export default App;
