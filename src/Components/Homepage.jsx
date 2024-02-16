import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import Carouselcomp from "./Carousel";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Homepagesite = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Carouselcomp />
      <Container className="mt-5" style={{ height: "70em" }}>
        <Row>
          <Col>
            <Card className="cardshadow" style={{ height: "350px" }}>
              <Card.Body>
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
          <Col>
            <Card className="cardshadow" style={{ height: "350px" }}>
              <Card.Body>
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
          <Col>
            <Card className="cardshadow" style={{ height: "350px" }}>
              <Card.Body>
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
          <Col>
            <Card className="cardshadow" style={{ height: "350px" }}>
              <Card.Body>
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
          <Col>
            <Button
              onClick={() => {
                navigate("/prenota");
              }}
            >
              prenota un tavolo
            </Button>
          </Col>
          <Col>
          <Carousel className="colorsite">
              <Carousel.Item>
                <img
                  src="https://i.imgur.com/Z1bl39a.jpg"
                  style={{ width: "100%", height: "550px" }}
                  alt="boh"
                />
                <Carousel.Caption>
                  <h1 className="fontcolor">
                    La nostra pizzeria vi accoglie con calore e allegria
                  </h1>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homepagesite;
