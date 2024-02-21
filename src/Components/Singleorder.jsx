import { Button, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteaDelivery } from "../Redux/actions";

const SingleOrderdelement = (props) => {
  const [deletedOrder, setdeletedOrder] = useState();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const sendADeletedOrder = async () => {
    dispatch(deleteaDelivery(token, deletedOrder));
  };

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          <Row className="justify-content-between">
            <Col sm={12} lg={3} className="d-flex justify-content-center">
              <img
                src={props.food.menu.image}
                style={{ width: "100px", height: "80px" }}
                alt="foto"
              />
            </Col>
            <Col
              sm={12}
              lg={3}
              className="d-flex flex-column align-items-center my-2"
            >
              <h6>{props.food.menu.descrizione}</h6>
              <h6 className="fw-bold">quantità: {props.food.quantita}</h6>
            </Col>
            <Col
              sm={12}
              lg={4}
              className="text-center d-flex justify-content-center"
            >
              <Button
                className="bn632-hover bn19"
                onClick={() => {
                  setdeletedOrder(props.food.idDelivery);
                  handleShow();
                }}
              >
                ANNULLA ORDINE
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <span>
                      {" "}
                      eliminare la prenotazione di {props.food.menu.descrizione}
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button className="bn3637 bn37 " onClick={handleClose}>
                    ANNULLA
                  </Button>
                  <Button
                    className="bn632-hover bn19 "
                    onClick={() => {
                      sendADeletedOrder();
                      handleClose();
                    }}
                  >
                    CONFERMA
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};
export default SingleOrderdelement;
