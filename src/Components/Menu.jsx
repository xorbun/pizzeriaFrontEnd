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
      <Container fluid className="d-flex  mt-5">
        <Row>
          {menuFromRedux.map((menuHome) => {
            return (
              <Col md={4}>
                <Card style={{ height: "350px" }} className="mx-2 mb-4">
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
    );
  }
};
export default MenuRestourant;
