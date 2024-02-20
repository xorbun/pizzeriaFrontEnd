import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Currentuser = () => {
  const user = useSelector((state) => {
    return state.users.data;
  });
  const navigate = useNavigate();

  return (
    <div className="colorsite vh-100">
      <Container>
        <Row>
          <Col
            className="d-flex flex-column align-items-center "
            style={{ padding: "20px" }}
          >
            <h2>Profilo Utente</h2>
            <p>Benvenuto, {user.nome}!</p>
            <p>Username: {user.nickname}</p>
            <p>Email: {user.email}</p>
            <Row lg={5} sm={12}>
              <Col className="text-center">
                <Button className=" bn632-hover bn19 ">modifica</Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="bn632-hover bn19"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  vedi menu
                </Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="bn632-hover bn19 "
                  onClick={() => {
                    navigate("/prenotazioni");
                  }}
                >
                  Visualizza prenotazioni
                </Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="bn632-hover bn19 "
                  onClick={() => {
                    navigate("/ordered");
                  }}
                >
                  Delivery
                </Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="bn3637 bn37 "
                  onClick={() => {
                    navigate("/logout");
                  }}
                >
                  logout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Currentuser;
