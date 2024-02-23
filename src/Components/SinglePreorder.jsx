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
            <Col sm={4} lg={8}>
              <div className="d-flex flex-column">
                <span className="fw-bold ">
                  data:
                  {props.preorder.data}
                </span>

                <span className="fw-bold ">
                  orario:
                  {props.preorder.orario}{" "}
                  
                </span>
                

                <span className="fw-bold">
                  numero persone:
                  {props.preorder.numeroPersone}
                </span>
              </div>
            </Col>

            <Col sm={2} lg={4} className="text-center">
              <Button
                className="mx-2 bn632-hover bn19"
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
