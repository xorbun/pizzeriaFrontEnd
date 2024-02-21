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
              src={pizza[6].image}
              style={{ width: "100%", height: "32em" }}
              alt="boh"
            />
            <Carousel.Caption>
              <h1 className="fontcolor ">Benvenuti alla Pizzeria del Gusto!</h1>
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
