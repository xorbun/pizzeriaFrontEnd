import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLogin, getUserData, getMenuData, getAllUsersData } from "../Redux/actions";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  
  const dispatch = useDispatch();
  

  const login = async (e) => {
      e.preventDefault();
      dispatch(getTokenFromLogin(email, password)).then((token) =>
      dispatch(getUserData(token))
    );
  };
  
  return (
    <>
      <Container>
        <Row className="flex-column">
          <Col>
            <Form onSubmit={login}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};
export default Login;
