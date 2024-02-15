import Container from "react-bootstrap/Container";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavbarHome = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => {
    return state.users.data;
  });
  return (
    <Navbar expand="lg" className="colornav">
      <Container fluid>
        <Navbar.Brand onClick={() => window.location.reload()}>
          <img
            src="assets/OIG3.oGwKUH0fvFOGFzq2liqS.jpeg"
            alt="logo"
            style={{ width: "50px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/home");
              }}
            >
              <i class="bi bi-house"></i>
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/LoginPage");
              }}
            >
              Login
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/register");
              }}
            >
              Registrati
            </Nav.Link>
            <Nav.Link href="#">cerca</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/me");
              }}
            >
              {currentUser.nickname}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarHome;
