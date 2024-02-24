import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAllPrenotazioniData, getPrenotazioni } from "../Redux/actions";
import Singlepreorder from "./SinglePreorder";
import { useState } from "react";

const PrenotazioniList = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [selectedUser, setselectedUser] = useState();
  const user = useSelector((state) => {
    return state.users.data;
  });

  if(user.role !== "ADMIN" )
    {
      const prenotazioni=dispatch(getPrenotazioni(token));
    }
    else
    {
      const prenotazioni=dispatch(getAllPrenotazioniData(token))
    }

  let preorderToShow = "";
  const prenotazioniFromRedux = useSelector((state) => {
    return state.prenotazioni.data;
  });
  const allPrenotazioniFromRedux = useSelector((state) => {
    return state.prenotazioni.data.content;
  });
  if (user.role === "ADMIN") {
    preorderToShow = allPrenotazioniFromRedux;
  } else {
    preorderToShow = prenotazioniFromRedux;
  }

  if (preorderToShow) {
    return (
      <div className="colorsite vh-100">
        <Container className="list">
          {preorderToShow.length> 0  ? (
            <h2 className="d-flex justify-content-center ">
              PRENOTAZIONI ATTIVE
            </h2>
          ) : (
            <h2 className="d-flex justify-content-center ">
              non ci sono prenotazioni
            </h2>
          )}

          {preorderToShow.map((prenotazioni) => {
            return (
              <Row
                key={prenotazioni.prenotazione}
                className="mt-2 d-flex justify-content-center"
              >
                <h1 className="text-center">{prenotazioni.user.nickname}</h1>
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
