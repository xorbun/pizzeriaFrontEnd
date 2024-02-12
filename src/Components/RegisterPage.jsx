import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const baseEndpoint = "http://localhost:3001/auth/register";

  const register = async (e) => {
    e.preventDefault();
    if (checkIfPassAreEquals()) {
      const objectToUse = {
        nome: name,
        cognome: surname,
        nickname: username,
        email: email,
        password: password
      };

      const response = await fetch(baseEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objectToUse)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("errore");
      }
    }
  };

  const checkIfPassAreEquals = () => {
    if (password !== confirmPassword) {
      setError("Le due password non corrispondono!");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Container
      fluid
      
      style={{ backgroundColor: "#27262c" }}
    >
      <Row className="justify-content-center align-items-center h-100">
        <Col md={4}>
          <Form
            className="d-flex flex-column gap-5"
            onSubmit={register}
          >
            <h1 className="text-start mb-4">register</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Email"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem",}}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem" }}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSurname">
              <Form.Control
                type="text"
                placeholder="Surname"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem" }}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem" }}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <InputGroup controlId="formBasicPassword">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text onClick={handleShowPassword} type="button">
                {showPassword ? "Nascondi" : "Mostra"}
              </InputGroup.Text>
            </InputGroup>
            <InputGroup controlId="formBasicPasswordConfirm">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="border-0 border-bottom rounded-0 shadow-none text-black"
                style={{ fontSize: "1.2rem" }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputGroup.Text onClick={handleShowPassword} type="button">
                {showPassword ? "Nascondi" : "Mostra"}
              </InputGroup.Text>
            </InputGroup>

            <div className="d-grid gap-2">
              <button
                className="text-center"
                size="lg"
                type="submit"
              >
                register
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;