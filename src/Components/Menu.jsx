import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Singlefood from "./Singlefood";
import { useState } from "react";

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

  return (
    <div className="colorsite vh-200">
      <Container className="d-flex ">
        <Row className="mt-5">
          <select
            id="disabledSelect"
            className="form-select mb-5 "
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
          >
            <option value="menu">menu</option>
            <option value="pizza">pizza</option>
            <option value="antipasti">antipasti</option>
            <option value="bevande">bevande</option>
          </select>
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
};
export default MenuRestourant;
