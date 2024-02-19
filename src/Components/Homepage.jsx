import { Button, Carousel, Col, Container, Modal, Row } from "react-bootstrap";
import Carouselcomp from "./Carousel";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Homepagesite = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="colorsite ">
      <Carouselcomp />
      <Container className="mt-5 ">
        <Row>
          <Col sm={1} className="mb-3" lg={3}>
            <Card className="cardshadow border-0" style={{ height: "350px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Atmosfera Accogliente:</h5>
                </Card.Title>
                <Card.Text>
                  Entra e lasciati avvolgere dall'aroma irresistibile della
                  pizza appena sfornata. I nostri tavoli in legno e le luci
                  soffuse creano un'atmosfera calda e familiare.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} className="mb-3" lg={3}>
            <Card className="cardshadow border-0" style={{ height: "350px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Menu Eclettico:</h5>
                </Card.Title>
                <Card.Text>
                  La nostra vasta selezione di pizze accontenta tutti i gusti.
                  Dalla classica Margherita alla saporita Diavola, passando per
                  le opzioni vegetariane e senza glutine, c'è una pizza per ogni
                  palato. Non dimenticare gli antipasti: focacce fragranti,
                  olive marinare e mozzarella di bufala fresca.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} className="mb-3" lg={3}>
            <Card className="cardshadow border-0" style={{ height: "350px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Ingredienti di Qualità: </h5>
                </Card.Title>
                <Card.Text>
                  Utilizziamo solo ingredienti freschi e genuini. La nostra
                  mozzarella viene direttamente dalla Campania, e i pomodori San
                  Marzano conferiscono alle nostre pizze un sapore autentico.
                  L'impasto è lievitato lentamente per garantire una base
                  leggera e croccante.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} className="mb-3" lg={3}>
            <Card className="cardshadow border-0" style={{ height: "350px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Servizio Cordiale:</h5>
                </Card.Title>
                <Card.Text>
                  Il nostro staff è appassionato di pizza e pronto a rendere la
                  tua visita indimenticabile. Siamo qui per consigliarti e farti
                  sentire a casa. Vieni a trovarci alla Pizzeria del Gusto e
                  lasciati conquistare dalla magia della pizza italiana! 🍕🇮🇹
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12} lg={6}>
            <div>
              <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                  <img
                    className=" cardshadow mb-5"
                    src="https://i.imgur.com/Z1bl39a.jpg"
                    style={{ width: "100%", height: "550px" }}
                    alt="boh"
                  />
                  <Carousel.Caption>
                    <p className="trasparencytext ">
                      La nostra pizzeria vi accoglie con calore e allegria
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col sm={12} className="d-flex justify-content-center mb-4">
            <Button
              className="bn632-hover bn19"
              onClick={() => {
                navigate("/prenota");
              }}
            >
              prenota un tavolo
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homepagesite;
