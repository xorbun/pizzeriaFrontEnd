import { Col, Container, Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import SingleOrderdelement from "./Singleorder";
import { getAllDeliveryData, getDeliveryData } from "../Redux/actions";
import { useEffect } from "react";

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
useEffect(()=>
{
  if (user.role !== "ADMIN") {
    const ordini = dispatch(getDeliveryData(token));
  } else {
    const ordini = dispatch(getAllDeliveryData(token));
  }
},[])
  if (orderedFoodFromRedux) {
    return (
      <div className="colorsite vh-100">
        <Container className="d-flex list justify-content-center mx-auto">
          <Row className="mt-5 ">
            <Col lg={12} className=" d-flex justify-content-center">
              <h1 className="text-secondary">totale spesa {totaleSpesa()} €</h1>
            </Col>
            
            <Col lg={12} className=" d-flex justify-content-center">
            {orderedFoodFromRedux[0].stato==="INVIATO"?(
              <h5>stato:ordine inviato</h5>
              ):(
                <h5>stato:ordine in consegna</h5>
              )}
              </Col>
            {orderedFoodFromRedux.map((ordered) => {
              return (
                <Col lg={6} md={12} className="mb-4" key={ordered.idDelivery}>
                  <SingleOrderdelement food={ordered} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
};
export default Orderedfood;
