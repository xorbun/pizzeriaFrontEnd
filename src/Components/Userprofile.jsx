import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Currentuser = () => {
  const user = useSelector((state) => {
    return state.users.data;
  });
  const navigate = useNavigate();

  return (
    <div className="colorsite vh-100 mt-5">
      <Container>
        <Row>
          <Col
            className="d-flex flex-column align-items-center mt-5"
            style={{ padding: "20px" }}
          >
            <h2>Benvenuto, {user.nickname}!</h2>

            <Row className="mt-5">
              <Col className="text-center">
                <Button
                  className="bn632-hover bn19"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  VISUALIZZA MENU
                </Button>
              </Col>
              <Col className="text-center">
                <Button
                  className="bn632-hover bn19 "
                  onClick={() => {
                    navigate("/prenotazioni");
                  }}
                >
                  VISUALIZZA PRENOTAZIONI
                </Button>
              </Col>

              <Col className="text-center">
                <Button
                  className="bn632-hover bn19 "
                  onClick={() => {
                    if (user.role === "ADMIN") {
                      navigate("/orderlist");
                    } else {
                      navigate("/ordered");
                    }
                  }}
                >
                  VISUALIZZA ORDINE
                </Button>
              </Col>

              <Col className="text-center">
                <Button
                  className="bn3637 bn37 "
                  onClick={() => {
                    navigate("/logout");
                  }}
                >
                  LOGOUT
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
