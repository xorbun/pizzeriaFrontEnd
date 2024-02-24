import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFood,
  modifyMenu,
  setNewImage,
  takeanorder,
} from "../Redux/actions";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Singlefood = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [payload, setpayload] = useState({ quantita: 0 });
  const [descrizione, setdescrizione] = useState();
  const [ingredienti, setingredienti] = useState();
  const [prezzo, setprezzo] = useState();
  const [type, settype] = useState();
  const [orderedFood, setOrderedFood] = useState();
  const [isLoading, setisloading] = useState(false);
  const error = useSelector((state) => {
    return state.error.genericError;
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setshow3(false);
  const handleShow3 = () => setshow3(true);

  const user = useSelector((state) => {
    return state.users.data;
  });
  const data = new FormData();
  const [image, setImage] = useState(null);
  if (image) {
    data.append("image", image[0]);
  }

  const takeorder = async () => {
    dispatch(takeanorder(token, orderedFood, payload));
  };
  const modifyfood = async () => {
    dispatch(
      modifyMenu(token, orderedFood, descrizione, ingredienti, prezzo, type)
    );
  };
  const deleteFoodFromDb = async () => {
    dispatch(deleteFood(token, orderedFood));
  };
  const sendimage = async (id) => {
    dispatch(setNewImage(token, data, id));
    console.log(image, id);
  };
  const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  useEffect(() => {}, [error]);
  if (props && !isLoading) {
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
                    className="bn632-hover bn19 "
                    onClick={() => {
                      handleShow2();
                      setOrderedFood(props.food.idMenu);
                    }}
                  >
                    MODIFICA MENU
                  </Button>
                  <Col>
                    <Button
                      className="bn3637 bn37 deletebutton"
                      onClick={() => {
                        setOrderedFood(props.food.idMenu);
                        handleShow3();
                      }}
                    >
                      ELIMINA
                    </Button>
                  </Col>
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
                className="w-100 border border-1 rounded-pill mb-2"
                id="myInput1"
                placeholder="   inserisci descrizione"
                onChange={(e) => {
                  setdescrizione(e.target.value);
                }}
              />
              <input
                type="text"
                className="w-100 border border-1 rounded-pill mb-2"
                id="myInput2"
                placeholder="   inserisci ingredienti"
                onChange={(e) => {
                  setingredienti(e.target.value);
                }}
              />
              <input
                type="number"
                className="w-100 border border-1 rounded-pill mb-2"
                id="myInput3"
                placeholder="   inserisci il prezzo"
                onChange={(e) => {
                  setprezzo(parseFloat(e.target.value));
                }}
              />

              <div className="d-flex">
                <select
                  id="disabledSelect"
                  className="form-select mb-2"
                  onChange={(e) => {
                    settype(e.target.value);
                  }}
                >
                  <option>seleziona</option>
                  <option value="PIZZA">PIZZA</option>
                  <option value="ANTIPASTI">ANTIPASTI</option>
                  <option value="BEVANDE">BEVANDE</option>
                </select>
              </div>
              <Form.Control
                className="w-75 me-3"
                type="file"
                size="sm"
                onChange={(e) => {
                  setImage(e.target.files);
                }}
              />

              <Button
                className="bn632-hover bn19  "
                onClick={() => {
                  sendimage(props.food.idMenu);
                }}
              >
                CARICA IMMAGINE
              </Button>
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

          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              <Modal.Title>{props.food.descrizione}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Confermi di voler eliminare dal menù{" "}
              <span className="fw-bold">{props.food.descrizione}</span>?
            </Modal.Body>
            <Modal.Footer>
              <Button className="bn3637 bn37" onClick={handleClose3}>
                Close
              </Button>
              <Button
                className="bn632-hover bn19"
                onClick={() => {
                  deleteFoodFromDb();
                  refresh();
                }}
              >
                CONFERMA
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
        {error && (
          <div className="alert alert-danger" role="alert">
            username o password errata
          </div>
        )}
      </Card>
    );
  } else {
    return (
      <div className="spinnercontainer d-flex justify-content-center colorsite">
        <div className="spinner"></div>
      </div>
    );
  }
};
export default Singlefood;
