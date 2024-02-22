import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import Singlefood from "./Singlefood";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuRestourant = () => {
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
  if(menuFromRedux)
  {
  return (
    
    <div className="colorsite vh-200">
      <Container className="d-flex ">
        <Row className="mt-5 ">
          <div className="d-flex mx-2 text-center">
            <Col sm={6}>
              <select
                id="disabledSelect"
                className="form-select mt-4 mx-3 "
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
            <Col sm={6}>
              <Button
                className="bn632-hover bn19 mx-5"
                onClick={() => {
                  navigate("/ordered");
                }}
              >
                VISUALIZZA ORDINE
              </Button>
            </Col>
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
    </div>
  );
          }
};
export default MenuRestourant;
