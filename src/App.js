
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import NavbarHome from './Components/Navbar';
import Register from './Components/RegisterPage';
import Login from './Components/LoginPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MenuRestourant from './Components/Menu';
import BackOfficeFetch from './Components/Backoffice';

import Currentuser from './Components/Userprofile';
import Homepagesite from './Components/Homepage';
import Footer from './Components/Footer';
import PrenotazioniList from './Components/Prenotazioni';
import Getprenotazioni from './Components/Getprenotazioni';





function App() {
 
  return (
    <>
      <BrowserRouter>
      <NavbarHome/>
     <BackOfficeFetch/>
     
      <Routes>
        <Route path="/home" element={<Homepagesite/>}/>
        <Route path="/menu" element={<MenuRestourant/>}/>
        <Route path="/LoginPage" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/me" element={<Currentuser/>}/>
        <Route path="/prenotazioni" element={<PrenotazioniList/>}/>
        <Route path="/prenota" element={<Getprenotazioni/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
