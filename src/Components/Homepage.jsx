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
    <div className="colorsite mt-5">
      <Carouselcomp />
      <Container className="mt-5 ">
        <Row>
          <Col sm={1} md={6} className="mb-3 " lg={3}>
            <Card
              className="cardshadow border-0 scale-in-center"
              style={{ height: "350px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Atmosfera Accogliente:</h5>
                </Card.Title>
                <Card.Text className="cardtext ">
                  Entra e lasciati avvolgere dall'aroma irresistibile della
                  pizza appena sfornata. I nostri tavoli in legno e le luci
                  soffuse creano un'atmosfera calda e familiare.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={6} className="mb-3" lg={3}>
            <Card
              className="cardshadow border-0 scale-in-center"
              style={{ height: "350px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center ">
                <Card.Title>
                  <h5>Menu Eclettico:</h5>
                </Card.Title>
                <Card.Text className="cardtext">
                  La nostra vasta selezione di pizze accontenta tutti i gusti.
                  Dalla classica Margherita alla saporita Diavola, passando per
                  le opzioni vegetariane e senza glutine, c'è una pizza per ogni
                  palato. Non dimenticare gli antipasti: focacce fragranti,
                  olive marinare e mozzarella di bufala fresca.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={6} className="mb-3" lg={3}>
            <Card
              className="cardshadow border-0 scale-in-center"
              style={{ height: "350px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Ingredienti di Qualità: </h5>
                </Card.Title>
                <Card.Text className="cardtext">
                  Utilizziamo solo ingredienti freschi e genuini. La nostra
                  mozzarella viene direttamente dalla Campania, e i pomodori San
                  Marzano conferiscono alle nostre pizze un sapore autentico.
                  L'impasto è lievitato lentamente per garantire una base
                  leggera e croccante.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={6} className="mb-3" lg={3}>
            <Card
              className="cardshadow border-0 scale-in-center"
              style={{ height: "350px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <h5>Servizio Cordiale:</h5>
                </Card.Title>
                <Card.Text className="cardtext">
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
            <Carousel indicators={false} controls={false} className="photo">
              <Carousel.Item>
                <img
                  className=" cardshadow mb-5 rounded-5"
                  src="https://i.imgur.com/Z1bl39a.jpg"
                  style={{ width: "100%", height: "550px" }}
                  alt="boh"
                />
                <Carousel.Caption>
                  <p className="trasparencytext cardtext ">
                    La nostra pizzeria vi accoglie con calore e allegria
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={12} lg={6}>
            <Card
              className="cardshadow border-0 rounded-5 mb-4"
              style={{ height: "550px" }}
            >
              <Card.Body className="d-flex flex-column align-items-center ">
                <Card.Title>
                  <h2>Amanti della pizza, </h2>
                </Card.Title>
                <Card.Text className="my-auto cardtext ">
                  Se stai cercando un’esperienza culinaria autentica e
                  deliziosa, vi invitiamo a prenotare un tavolo. Situata nel
                  cuore di Cassino, questa pizzeria offre una vasta selezione di
                  pizze artigianali cotte nel forno a legna. leggera e
                  croccante.
                </Card.Text>
                <Button
                  className="bn632-hover bn19"
                  onClick={() => {
                    navigate("/prenota");
                  }}
                >
                  PRENOTA UN TAVOLO
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homepagesite;
