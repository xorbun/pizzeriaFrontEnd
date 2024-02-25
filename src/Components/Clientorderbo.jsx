import { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
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

  return (
    <div>
      <ListGroup.Item className="mt-2 ">
        <div className="d-flex justify-content-between ">
          <h5>{props.detail[0].nickname}</h5>
          <h5>numero prodotti ordinati:{props.detail[1]}</h5>
          <Button
            className="bn632-hover bn19 "
            onClick={() => {
              id = props.detail[0].idUser;
              handleShow();
              details();
            }}
          >
            CARICA ORDINE
          </Button>
        </div>
      </ListGroup.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.detail[0].nickname},</Modal.Title>
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
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ClientOrderDetail;
