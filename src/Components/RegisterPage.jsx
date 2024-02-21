import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nome, setnome] = useState("");
  const [cognome, setcognome] = useState("");
  const [nickname, setnickname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const payload = {
    nome: nome,
    cognome: cognome,
    nickname: nickname,
    email: email,
    password: password,
  };
  const baseEndPoint = "http://localhost:3001/auth/register";

  const registerUser = () => {
    fetch(baseEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        alert("registrato correttamente");
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="colorsite vh-100">
      <Container>
        <Row>
          <Col>
            <h1>Registrati</h1>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                registerUser();
              }}
            >
              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setnome(e.target.value);
                }}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setcognome(e.target.value);
                }}
              >
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setnickname(e.target.value);
                }}
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="bn632-hover bn19"  type="submit">
                REGISTRATI
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Register;
