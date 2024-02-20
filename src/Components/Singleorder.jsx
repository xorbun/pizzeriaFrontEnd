import { Button, Col, ListGroup, Modal, Row } from "react-bootstrap";
import { useState } from "react";
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
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col>
            <img
              src={props.food.menu.image}
              style={{ width: "90px", height: "50px" }}
              alt="foto"
            />
          </Col>
          <Col>
            <Col sm={3}>{props.food.menu.descrizione}</Col>
          </Col>
          <Col>
            <Button
              className="bn3637 bn37 "
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
                  eliminare la prenotazione con {props.food.descrizione}
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button className="bn3637 bn37 " onClick={handleClose}>
                  Annulla
                </Button>
                <Button
                  className="bn3637 bn37 "
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
  );
};
export default SingleOrderdelement;
