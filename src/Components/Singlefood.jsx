import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyMenu, takeanorder } from "../Redux/actions";
import { Col, Row } from "react-bootstrap";

const Singlefood = (props) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [payload, setpayload] = useState({ quantita: 0 });
  const [payload2, setpayload2] = useState();
  const [orderedFood, setOrderedFood] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const user = useSelector((state) => {
    return state.users.data;
  });

  const takeorder = async () => {
    dispatch(takeanorder(token, orderedFood, payload));
  };
  const modifyfood = async () => {
    dispatch(modifyMenu(token, orderedFood, payload2));
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <Card className="mx-2 mb-4 cardshadow">
      <Card.Img
        className="imgMenu"
        variant="top"
        style={{ height: "220px" }}
        src={props.food.image}
        alt="fotoProdotto"
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{props.food.descrizione}</Card.Title>
        <Card.Text className="truncate">{props.food.ingredienti}</Card.Text>
        <Card.Text>PREZZO: {props.food.prezzo} €</Card.Text>
        <Row>
          <div className="flex-container">
            {user.role === "ADMIN" ? (
              <Col>
                <Button
                  className="bn3637 bn37 "
                  onClick={() => {
                    handleShow2();
                    setOrderedFood(props.food.idMenu);
                  }}
                >
                  MODIFICA MENU
                </Button>
              </Col>
            ) : (
              <Col>
                <Button
                  className="bn632-hover bn19 "
                  onClick={() => {
                    handleShow();
                    setOrderedFood(props.food.idMenu);
                  }}
                >
                  ORDINA
                </Button>
              </Col>
            )}
          </div>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.food.descrizione}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Quantità da ordinare:</span>
            <select
              id="disabledSelect"
              className="form-select"
              onChange={(e) => {
                setpayload({ quantita: parseInt(e.target.value) });
              }}
            >
              <option>seleziona</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bn3637 bn37 " onClick={handleClose}>
              ANNULLA
            </Button>
            <Button
              className="bn632-hover bn19 "
              onClick={() => {
                takeorder();
                handleClose();
              }}
            >
              CONFERMA
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>{props.food.descrizione}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="w-100 border border-1 rounded-pill"
              id="myInput"
              placeholder="   inserisci il prezzo"
              onChange={(e) => {
                setpayload2(parseFloat(e.target.value));
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="bn3637 bn37 " onClick={handleClose2}>
              ANNULLA
            </Button>
            <Button
              className="bn632-hover bn19 "
              onClick={() => {
                modifyfood();
                refresh();
              }}
            >
              SALVA MODIFICA
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};
export default Singlefood;
