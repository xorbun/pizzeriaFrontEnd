import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
const MenuRestourant = () => {
  const menuFromRedux = useSelector((state) => {
    return state.menu.menu.content;
  });

  console.log(menuFromRedux);
  if (menuFromRedux) {
    return (
      <Container fluid className="mt-5">
        <Row>
          <Col md={4}>
            {menuFromRedux.map((menuHome) => {
              return (
                <Card style={{ width: "18rem" }} className="mx-2 mb-2">
                  <Card.Img variant="top" src={menuHome.image} />
                  <Card.Body>
                    <Card.Title>{menuHome.descrizione}</Card.Title>
                    <Button variant="primary">ordina</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
};
export default MenuRestourant;
