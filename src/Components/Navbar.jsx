
import Container from 'react-bootstrap/Container';

import { Navbar,Nav } from 'react-bootstrap';
import NavLink from 'react-bootstrap';


const NavbarHome=()=>
{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={()=>window.location.reload()}>RistoriaPizzorante</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Registrati</Nav.Link>
            <Nav.Link href="#">cerca</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
        
      </Container>
      
    </Navbar>
    )
}
export default NavbarHome;