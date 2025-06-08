import logo from './logo.svg';
import './App.css';
import { Pocetna } from './pages/Pocetna';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Navbar from './components/navigacija/Navbar';
import AboutUs from './pages/AboutUs';
import Dentists from './pages/Dentists';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <>  
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/services" element={<Services />} />
        
          <Route path="/about" element={<AboutUs />} />
           <Route path="/dentists" element={<Dentists />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="/login" element={<LoginPage />} />




          


             <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> 
      
     
      
      
      
      </>
  );
}

export default App;
