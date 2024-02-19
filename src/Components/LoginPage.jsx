import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLogin, getUserData } from "../Redux/actions";
import {  Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const error=useSelector((state)=>
  {
    return state.auth.loginError
  })
  console.log(error)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const login = async (e) => {
    e.preventDefault();
    dispatch(getTokenFromLogin(email, password)).then((token)=>{
      if(token)
      {
        navigate("/me")
      }
    })
    
  };

useEffect(()=>{

},[error])
  return (
    
    <div className="colorsite vh-100">
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
              {
                error&&
                <div className="alert alert-danger" role="alert">
                  username o password errata
                </div>
              }
              
                  
              <Button className="bn632-hover bn19" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <h3>Non sei ancora registrato?</h3>
            <Button
              onClick={() => {
                navigate("/register");
              }}
            >
              Registrati
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
