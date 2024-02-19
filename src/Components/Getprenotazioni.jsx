import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Getprenotazioni = () => {
  const [data, setdata] = useState("");
  const [orario, setorario] = useState("");
  const [numeroPersone, setnumeroPersone] = useState("");
  console.log(typeof orario);
  const token = localStorage.getItem("token");

  const payload = {
    data: data,
    orario: orario,
    numeroPersone: numeroPersone,
  };

  const baseEndPoint = "http://localhost:3001/prenotazioni";
  const takePrenotazione = () => {
    fetch(baseEndPoint, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        alert("prenotazione effettuata");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container style={{ height: "50em" }}>
        <Row className="flex-column">
          <Col>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                takePrenotazione();
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onChange={(e) => {
                  setdata(e.target.value);
                }}
              >
                <Form.Label>inserisci data</Form.Label>
                <Form.Control
                  type="date"
                  format="yyyy-MM-dd"
                  placeholder="inserisci data"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                onChange={(e) => {
                  setorario(e.target.value);
                }}
              >
                <Form.Label>orario</Form.Label>
                <Form.Control type="time" placeholder="inserisci orario" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                onChange={(e) => {
                  setnumeroPersone(e.target.value);
                }}
              >
                <Form.Label>numero persone</Form.Label>
                <Form.Control
                  type="int"
                  placeholder="inserisci il numero di persone"
                />
              </Form.Group>

              <Button className="bn632-hover bn19" type="submit">
                PRENOTA
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Getprenotazioni;
