import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Currentuser = () => {
  const user = useSelector((state) => {
    return state.users.data;
  });
  return (
    <div>
      <Container>
        <Row>
          <Col
            className="d-flex flex-column align-items-center"
            style={{ border: "2px solid black", padding: "20px" }}
          >
            <h2>Profilo Utente</h2>
            <p>Benvenuto, {user.nome}!</p>
            <p>Username: {user.nickname}</p>
            <p>Email: {user.email}</p>
            <Button>modifica</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Currentuser;
