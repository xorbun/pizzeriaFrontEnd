import Container from "react-bootstrap/Container";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NavbarHome = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  //localStorage.removeItem("token");
  console.log(token);
  const currentUser = useSelector((state) => {
    return state.users.data;
  });
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsNavbarVisible(scrollY < 100); 
  };

  window.addEventListener('scroll', handleScroll);
  useEffect(() => {}, []);
  return (
    <Navbar expand="lg" className={`colornav sticky-nav ${isNavbarVisible ? '' : 'hidden'}`}  fixed="top">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src="assets/logo.png"
            alt="logo"
            style={{ width: "50px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex ms-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="bi bi-house"></i>
            </Nav.Link>
            {token !== null ? (
              <Nav.Link
                onClick={() => {
                  if (currentUser) {
                    navigate("/me");
                  }
                }}
              >
                {currentUser.nickname}
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => {
                  navigate("/LoginPage");
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarHome;
