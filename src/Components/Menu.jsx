import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Singlefood from "./Singlefood";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setNewFoodToMenu } from "../Redux/actions";

const MenuRestourant = () => {
  const user = useSelector((state) => {
    return state.users.data;
  });
  const menuFromRedux = useSelector((state) => {
    return state.menu.menu.content;
  });
  const pizzaFromRedux = useSelector((state) => {
    return state.menu.pizza.content;
  });
  const bevandeFromRedux = useSelector((state) => {
    return state.menu.bevande.content;
  });
  const antipastiFromRedux = useSelector((state) => {
    return state.menu.antipasti.content;
  });
  let [selectedValue, setSelectedValue] = useState();
  let foodToShow = menuFromRedux;
  if (selectedValue === "menu") {
    foodToShow = menuFromRedux;
  } else if (selectedValue === "pizza") {
    foodToShow = pizzaFromRedux;
  } else if (selectedValue === "antipasti") {
    foodToShow = antipastiFromRedux;
  } else if (selectedValue === "bevande") {
    foodToShow = bevandeFromRedux;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const [descrizione, setdescrizione] = useState();
  const [image, setimage] = useState();
  const [ingredienti, setingredienti] = useState();
  const [prezzo, setprezzo] = useState();
  const [type, settype] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setNewFood = async () => {
    dispatch(
      setNewFoodToMenu(token, descrizione, image, prezzo, ingredienti, type)
    );
  };
  const refresh = () => {
    window.location.reload();
  };
  if (menuFromRedux) {
    return (
      <div className="colorsite vh-200">
        <Container className="d-flex ">
          <Row className="mt-5 ">
            <div className="d-flex mb-5 text-center flex-container">
              <Col sm={4}>
                <select
                  id="disabledSelect"
                  className="form-select mt-4"
                  onChange={(e) => {
                    setSelectedValue(e.target.value);
                  }}
                >
                  <option value="menu">menu</option>
                  <option value="pizza">pizza</option>
                  <option value="antipasti">antipasti</option>
                  <option value="bevande">bevande</option>
                </select>
              </Col>
              <Col sm={4}>
                <Button
                  className="bn632-hover bn19 mx-5"
                  onClick={() => {
                    navigate("/ordered");
                  }}
                >
                  VISUALIZZA ORDINE
                </Button>
              </Col>
              {user.role === "ADMIN" ? (
                <Col sm={4}>
                  <Button
                    className="bn632-hover bn19 mx-5"
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    AGGIUNGI AL MENU
                  </Button>
                </Col>
              ) : (
                ""
              )}
            </div>

            {foodToShow.length > 0 &&
              foodToShow.map((menu) => {
                return (
                  <Col lg={4} md={6} key={menu.idMenu}>
                    <Singlefood food={menu} />
                  </Col>
                );
              })}
          </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AGGIUNGI AL MENU</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="my-2">
              <input
                type="text"
                className="w-100 border border-1 rounded-pill"
                id="myInput2"
                placeholder="   nome prodotto"
                onChange={(e) => {
                  setdescrizione(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <input
                type="text"
                className="w-100 border border-1 rounded-pill"
                id="myInput3"
                placeholder="   link immagine"
                onChange={(e) => {
                  setimage(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <input
                type="text"
                className="w-100 border border-1 rounded-pill"
                id="myInput4"
                placeholder="   ingredienti"
                onChange={(e) => {
                  setingredienti(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <input
                type="text"
                className="w-100 border border-1 rounded-pill"
                id="myInput5"
                placeholder="   prezzo"
                onChange={(e) => {
                  setprezzo(parseFloat(e.target.value));
                }}
              />
            </div>
            <div>
              <select
                id="disabledSelect"
                className="form-select"
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
          </Modal.Body>
          <Modal.Footer>
            <Button className="bn3637 bn37 " onClick={handleClose}>
              ANNULLA
            </Button>
            <Button
              className="bn632-hover bn19 mx-5"
              onClick={() => {
                setNewFood();
                refresh();
              }}
            >
              AGGIUNGI
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
export default MenuRestourant;
