
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import NavbarHome from './Components/Navbar';
import Register from './Components/RegisterPage';
import Login from './Components/LoginPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MenuRestourant from './Components/Menu';
import BackOfficeFetch from './Components/Backoffice';
import Carouselcomp from './Components/Carousel';
import Currentuser from './Components/Userprofile';





function App() {
 
  return (
    <>
      <BrowserRouter>
      <NavbarHome/>
     <BackOfficeFetch/>
     <Carouselcomp/>
      <Routes>
        <Route path="/home" element={<MenuRestourant/>}/>
        <Route path="/LoginPage" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/me" element={<Currentuser/>}/>
      </Routes>
       
      </BrowserRouter>
      
    </>
  );
}

export default App;
