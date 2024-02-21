import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { deleteaPreorder } from "../Redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
const Singlepreorder = (props) => {
  const [deletedPreorder, setdeletedPreorder] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendADeletedPreorder = async () => {
    dispatch(deleteaPreorder(token, deletedPreorder));
  };

  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col sm={3}>
              <span className="fw-bold">data </span>
              {props.preorder.data}
            </Col>
            <Col sm={3}>
              <span className="fw-bold">orario </span>
              {props.preorder.orario}
            </Col>
            <Col sm={3}>
              <span className="fw-bold">numero persone </span>
              {props.preorder.numeroPersone}
            </Col>
            <Col sm={3}>
              <Button
                className="mx-2 bn632-hover bn19"
                style={{ width: "100px" }}
                onClick={() => {
                  setdeletedPreorder(props.preorder.prenotazione);
                  handleShow();
                }}
              >
                ANNULLA
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    eliminare la prenotazione del {props.preorder.data}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button className="bn3637 bn37 " onClick={handleClose}>
                    ANNULLA
                  </Button>
                  <Button
                    className="bn632-hover bn19"
                    onClick={() => {
                      sendADeletedPreorder();
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
    </>
  );
};
export default Singlepreorder;
