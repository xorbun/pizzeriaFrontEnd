import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

const Carouselcomp = () => {
  const pizza = useSelector((state) => {
    return state.menu.pizza.content;
  });
  if (pizza) {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img src={pizza[0].image} style={{ width: "100%", height: "350px"  }} alt="boh" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza[4].image} style={{ width: "100%", height: "350px"  }} alt="boh" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza[5].image} style={{ width: "100%", height: "350px"  }} alt="boh" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
};
export default Carouselcomp;
