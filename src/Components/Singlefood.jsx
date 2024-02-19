import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { useState } from "react";

const Singlefood = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  
  return (
    <Card style={{ height: "350px" }} className="mx-2 mb-4 border-0 cardshadow">
      <Card.Img
        variant="top"
        style={{ height: "250px" }}
        src={props.food.image}
      />
      <Card.Body>
        <Card.Title>{props.food.descrizione}</Card.Title>
        <Button variant="primary" onClick={handleShow}>
          ordina
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.food.descrizione}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Quantità da ordinare:</span>
            <select id="disabledSelect" className="form-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Conferma
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};
export default Singlefood;
