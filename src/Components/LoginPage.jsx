import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeliveryData,
  getTokenFromLogin,
  getUserData,
} from "../Redux/actions";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const error = useSelector((state) => {
    return state.auth.loginError;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    dispatch(getTokenFromLogin(email, password)).then((token) =>
      dispatch(getDeliveryData(token)).then((token) => {
        if (token) {
          navigate("/me");
        }
      })
    );
  };

  useEffect(() => {}, [error]);
  return (
    <div className="colorsite vh-100 d-flex">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-column ">
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
              {error && (
                <div className="alert alert-danger" role="alert">
                  username o password errata
                </div>
              )}

              <div className="text-center">
                <Button className="bn632-hover bn19 " type="submit">
                  LOGIN
                </Button>
              </div>
            </Form>
          </Col>
          <Col className="text-center">
            <span className="fs-4">Non sei ancora registrato?</span>
            <div>
              <Button
                className="bn632-hover bn19"
                onClick={() => {
                  navigate("/register");
                }}
              >
                REGISTRATI
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
