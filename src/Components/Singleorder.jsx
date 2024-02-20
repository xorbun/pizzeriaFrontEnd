import { Button, Col, ListGroup, Modal, Row } from "react-bootstrap";
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
    <>
      <ListGroup>
        <ListGroup.Item>
          <Row className="justify-content-between">
            <Col sm={3} lg={4}>
              <img
                src={props.food.menu.image}
                style={{ width: "100px", height: "80px" }}
                alt="foto"
              />
            </Col>
            <Col lg={4} className="my-auto">
              <h3>{props.food.menu.descrizione}</h3>
            </Col>
            <Col sm={3} lg={4} className="text-center">
              <Button
                className="bn632-hover bn19 "
                onClick={() => {
                  setdeletedOrder(props.food.idDelivery);
                  handleShow();
                }}
              >
                annulla ordine
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
                    Annulla
                  </Button>
                  <Button
                    className="bn632-hover bn19 "
                    onClick={() => {
                      sendADeletedOrder();
                      handleClose();
                    }}
                  >
                    conferma
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
export default SingleOrderdelement;
