import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

const Carouselcomp = () => {
  const pizza = useSelector((state) => {
    return state.menu.pizza.content;
  });
  if (pizza) {
    return (
      <>
        <Carousel indicators={false} controls={false} className="colorsite">
          <Carousel.Item>
            <img
              className="imageresolution"
              src="assets/pizza-napoletana-o-romana.jpg"
              style={{ width: "100%", height: "70vh" }}
              alt="boh"
            />
            <Carousel.Caption className="carouselcaption d-flex flex-column justify-content-between">
              <h1 className="fontcolor  carouseltitle  mt-4">
                Benvenuti nella Pizzeria del Gusto!
              </h1>
              <p className="trasparencytext">
                Sei pronto per un’esperienza culinaria indimenticabile? La
                Pizzeria del Gusto è il luogo perfetto per gli amanti della
                pizza
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
};
export default Carouselcomp;
