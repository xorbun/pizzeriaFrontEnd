import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Currentuser = () => {
  const user = useSelector((state) => {
    return state.users.data;
  });
  const navigate = useNavigate();
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
            <div className="d-flex">
              <Button className="mx-2">modifica</Button>
              <Button
                onClick={() => {
                  navigate("/menu");
                }}
              >
                vedi menu
              </Button>
              <Button className="mx-2" onClick={()=>{
                navigate("/prenotazioni")
              }}>Visualizza prenotazioni</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Currentuser;
