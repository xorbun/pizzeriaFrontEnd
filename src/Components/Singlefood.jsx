import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { takeanorder } from "../Redux/actions";

const Singlefood = (props) => {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [payload, setpayload] = useState({ quantita: 0 });
  const [orderedFood, setOrderedFood] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const takeorder = async () => {
    
    dispatch(takeanorder(token, orderedFood, payload));
  };

  return (
    <Card style={{ height: "450px" }} className="mx-2 mb-4 cardshadow">
      <Card.Img
        className="imgMenu"
        variant="top"
        style={{ height: "220px" }}
        src={props.food.image}
      />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{props.food.descrizione}</Card.Title>
        <Card.Text className="truncate">{props.food.ingredienti}</Card.Text>
        <Button
          className="bn632-hover bn19 "
          onClick={() => {
            handleShow();
            setOrderedFood(props.food.idMenu);
          }}
        >
          ordina
        </Button>
        <Modal  show={show} onHide={handleClose}>
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
              Annulla
            </Button>
            <Button
              className="bn632-hover bn19 "
              onClick={() => {
                takeorder();
                alert("ordine confermato");
                handleClose();
              }}
            >
              Conferma
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};
export default Singlefood;
