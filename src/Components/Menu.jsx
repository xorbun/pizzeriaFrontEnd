import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Singlefood from "./Singlefood";


const MenuRestourant = () => {
  const menuFromRedux = useSelector((state) => {
    return state.menu.menu.content;
  });
  
  return (
      <div className="colorsite vh-200">
        <Container className="d-flex ">
          <Row className="mt-5">
            {menuFromRedux.length>0 &&
              menuFromRedux.map((menu) => {
              return (
                <Col lg={4} md={6} key={menu.idMenu}>
                    <Singlefood food={menu}/>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
};
export default MenuRestourant;
