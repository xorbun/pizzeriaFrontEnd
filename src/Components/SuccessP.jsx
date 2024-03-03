import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  return (
    <div className=" colorsite vh-100 mt-5">
      <Container>
        <Row className="mt-5">
          <Col className="mt-5 d-flex justify-content-center">
            <h1>Pagamento effettuato</h1>
          </Col>
          <div className="d-flex justify-content-center">
            <a href="/">torna alla home</a>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default SuccessPayment;
