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
  const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Container >
      <ListGroup className="bounce-in-top ">
        <ListGroup.Item>
          <Row>
          
            <Col sm={4} lg={8}>
              <div className="d-flex">
                <img
                  src={props.food.menu.image}
                  style={{ width: "130px", height: "90px" }}
                  alt="foto"
                />
                <div className="d-flex flex-column mx-3 my-3">
                  <span className="fw-bold">
                    Tipologia: {props.food.menu.descrizione}
                  </span>
                  <span className="fw-bold ">
                    Quantità: {props.food.quantita}
                  </span>
                </div>
              </div>
            </Col>

            <Col
              sm={2}
              lg={4}
              className="text-center d-flex justify-content-center "
            >
              {props.food.stato==="INVIATO" ?(
              <Button
                className="bn632-hover bn19 "
                onClick={() => {
                  setdeletedOrder(props.food.idDelivery);
                  handleShow();
                }}
              >
                <span className="bottonsize">ANNULLA ORDINE</span>
              </Button>
           ):("") }
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
                      refresh()
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
