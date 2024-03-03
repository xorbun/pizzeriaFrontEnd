import { useEffect, useState } from "react";
import { Button, Col, ListGroup, Modal, ModalBody, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDeliveryData } from "../Redux/actions";

const ClientOrderDetail = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let id = "";
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const details = () => {
    dispatch(getSingleDeliveryData(token, id));
  };

  const order = useSelector((state) => {
    return state.delivery.single;
  });

  const UpdateState = async () => {
    console.log("ok");
    const URL =
      "http://localhost:3001/delivery/updateOrder/" +
      order.content[0].user.idUser;
    try {
      const response = await fetch(URL, {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bounce-in-top">
      <ListGroup className="mt-5 ">
        <ListGroup.Item className="listheight ">
          <div className="d-flex justify-content-between">
            <Col lg={8} className="d-flex flex-column">
              <span className="fw-bold">Nickname:</span>
              <span className="padding">{props.detail[0].nickname}</span>
              <span className="fw-bold">indirizzo di consegna:</span>
              <span className="truncateaddress">{props.detail[0].address}</span>
            </Col>
         
            <Col lg={4} className="my-auto">
              <Button
                className="bn632-hover bn19"
                onClick={() => {
                  id = props.detail[0].idUser;
                  handleShow();
                  details();
                }}
              >
                VISUALIZZA ORDINE
              </Button>
            </Col>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column" closeButton>
          <Modal.Title>{props.detail[0].nickname},</Modal.Title>
          <ModalBody>{props.detail[0].address}</ModalBody>
          {order && <ModalBody>{order.content[0].stato}</ModalBody>}
        </Modal.Header>
        <Modal.Body>
          {order &&
            order.content.map((details) => {
              return (
                <h6 key={details.idDelivery}>
                  {details.menu.descrizione},
                  <span className="fw-bold">quantità:</span>
                  {details.quantita}
                </h6>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bn632-hover bn19 "
            onClick={() => {
              handleClose();
              UpdateState();
            }}
          >
            CONFERMA CONSEGNA
          </Button>
          <Button className="bn632-hover bn19 " onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ClientOrderDetail;
