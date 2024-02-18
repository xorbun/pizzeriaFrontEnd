import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";


const MenuRestourant = () => {
  const menuFromRedux = useSelector((state) => {
    return state.menu.menu.content;
  });

  if (menuFromRedux) {
    return (
      <div className="colorsite vh-200">
        <Container className="d-flex ">
          <Row className="mt-5">
            {menuFromRedux.map((menuHome) => {
              return (
                <Col key={menuHome.idMenu} lg={4} md={6}>
                  <Card
                    style={{ height: "350px" }}
                    className="mx-2 mb-4 border-0 cardshadow"
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "250px" }}
                      src={menuHome.image}
                    />
                    <Card.Body>
                      <Card.Title>{menuHome.descrizione}</Card.Title>
                      <Button variant="primary">ordina</Button>
                      
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
};
export default MenuRestourant;
