import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import SingleOrderdelement from "./Singleorder";
import { getAllDeliveryData, getDeliveryData } from "../Redux/actions";
import { useEffect, useState } from "react";
import Paymentmethod from "./Payment";

const Orderedfood = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => {
    return state.users.data;
  });

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
  const [stato, setstato] = useState("ciao");
  const arrayPayment = [];
  const createArray = () => {
    if (orderedFoodFromRedux) {
      orderedFoodFromRedux.map((order) => {
        arrayPayment.push({
          price: order.menu.priceId,
          quantity: order.quantita,
        });
      });
    }
  };
  createArray();

  useEffect(() => {
    if (user.role !== "ADMIN") {
      const ordini = dispatch(getDeliveryData(token)).then((res) => {
        console.log(res);
        if (res.content.length > 0) {
          setstato(res.content[0].stato);
        }
      });
    } else {
      const ordini = dispatch(getAllDeliveryData(token));
    }
  }, []);
  console.log(stato);
  if (orderedFoodFromRedux) {
    return (
      <div className="colorsite vh-100 mt-5">
        <Container className="d-flex list justify-content-center mx-auto">
          <Row className="mt-5 ">
            <Col lg={12} className=" d-flex justify-content-center">
              <h1 className="text-secondary">totale spesa {totaleSpesa()} €</h1>
            </Col>
            <Col lg={12} className=" d-flex justify-content-center">
              <span>
                {stato === "INVIATO"
                  ? "ordine inviato"
                  : stato === "IN_CONSEGNA"
                  ? "in consegna"
                  : " "}
              </span>
            </Col>

            {orderedFoodFromRedux.map((ordered) => {
              return (
                <Col lg={6} md={12} className="mb-4" key={ordered.idDelivery}>
                  <SingleOrderdelement food={ordered} />
                </Col>
              );
            })}

            <div className="d-flex justify-content-center">
              <Paymentmethod arrayoforder={arrayPayment} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Orderedfood;
