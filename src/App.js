
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import NavbarHome from './Components/Navbar';
import Register from './Components/RegisterPage';
import Login from './Components/LoginPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MenuRestourant from './Components/Menu';
import { useDispatch } from 'react-redux';
import { getAllUsersData, getDeliveryData, getMenuData, getPrenotazioni, getUserData } from './Redux/actions';

function App() {
  const dispatch=useDispatch();
  const menu = dispatch(getMenuData());
  
  return (
    <>
      <BrowserRouter>
      <NavbarHome/>
      
      <Routes>
        <Route path="/home" element={<MenuRestourant/>}/>
        <Route path="/LoginPage" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/> 
      </Routes>
       
      </BrowserRouter>
      
    </>
  );
}

export default App;
