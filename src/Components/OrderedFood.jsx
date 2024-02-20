import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import SingleOrderdelement from "./Singleorder";
import { getDeliveryData } from "../Redux/actions";
import { useEffect } from "react";

const Orderedfood = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const ordini = dispatch(getDeliveryData(token));
  const orderedFoodFromRedux = useSelector((state) => {
    return state.delivery.data.content;
  });
  const totaleSpesa = () => {
    let tot = 0;
    for (let i = 0; i < orderedFoodFromRedux.length; i++) {
      tot += orderedFoodFromRedux[i].totale;
    }
    return tot;
  };
  
  if (orderedFoodFromRedux) {
    totaleSpesa();
    return (
      <div className="colorsite vh-100">
        <Container className="d-flex list justify-content-center">
          <Row className="mt-5">
            {orderedFoodFromRedux.map((ordered) => {
              return (
                <Col lg={12} md={6} className="mb-4" key={ordered.idDelivery}>
                  <SingleOrderdelement food={ordered}  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h1>totale spesa {totaleSpesa()}</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Orderedfood;
