import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getPrenotazioni } from "../Redux/actions";
import Singlepreorder from "./SinglePreorder";
import { useEffect } from "react";

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
        <Container className="list">
          {prenotazioniFromRedux.length > 0 ? (
            <h2 className="d-flex justify-content-center ">
              Le tue prenotazioni
            </h2>
          ) : (
            <h2 className="d-flex justify-content-center ">
              non ci sono prenotazioni
            </h2>
          )}

          {prenotazioniFromRedux.map((prenotazioni) => {
            return (
              <Row
                key={prenotazioni.prenotazione}
                className="mt-2 d-flex justify-content-center"
              >
                <Col sm={6}>
                  <Singlepreorder preorder={prenotazioni} />
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
