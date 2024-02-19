import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getPrenotazioni } from "../Redux/actions";

const PrenotazioniList = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const prenotazioni = dispatch(getPrenotazioni(token));
  const prenotazioniFromRedux = useSelector((state) => {
    return state.prenotazioni.data;
  });
  if (prenotazioniFromRedux) {
    return (
      <div className="colorsite vh-100">
        <Container className="list" >
          <h2 className="d-flex justify-content-center ">
            Le tue prenotazioni
          </h2>
          {prenotazioniFromRedux.map((prenotazioni) => {
            return (
              <Row
                key={prenotazioni.prenotazione}
                className="mt-2 d-flex justify-content-center"
              >
                <Col lg={5} >
                  <ListGroup>
                    <ListGroup.Item>
                      <span className="fw-bold">data </span>
                      {prenotazioni.data},
                      <span className="fw-bold">orario </span>
                      {prenotazioni.orario},
                      <span className="fw-bold">numero persone </span>
                      {prenotazioni.numeroPersone}
                      <Button className="mx-2 bn632-hover bn19">annulla</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
};
export default PrenotazioniList;
