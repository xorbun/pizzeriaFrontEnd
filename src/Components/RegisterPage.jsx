import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError } from "../Redux/actions";

const Register = () => {
  const [nome, setnome] = useState("");
  const [cognome, setcognome] = useState("");
  const [nickname, setnickname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate=useNavigate();
  const payload = {
    nome: nome,
    cognome: cognome,
    nickname: nickname,
    address: address,
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
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          seterror(true);
        }
      })
      .then((data) => {
        alert("registrazione effettuata");
        seterror(false)
        navigate("/LoginPage")
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {}, [error]);
  return (
    <div className="colorsite vh-100 d-flex">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <h1>Registrati</h1>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  !email ||
                  !nome ||
                  !cognome ||
                  !nickname ||
                  !address ||
                  !password
                ) {
                  seterror(true);
                } else {
                  registerUser();
                  console.log("ok");
                }
              }}
            >
              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              >
                <Form.Label>inserisci l' indirizzo email</Form.Label>
                <Form.Control type="email" placeholder="Inserisci email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setnome(e.target.value);
                }}
              >
                <Form.Label>inserisci il tuo nome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci nome" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setcognome(e.target.value);
                }}
              >
                <Form.Label>inserisci il tuo cognome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci cognome" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setnickname(e.target.value);
                }}
              >
                <Form.Label>inserisci il tuo nickname</Form.Label>
                <Form.Control type="text" placeholder="Inserisci indirizzo" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              >
                <Form.Label>inserisci il tuo indirizzo</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              >
                <Form.Label>inserisci la tua password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {error && (
                <div className="alert alert-danger" role="alert">
                  Compila tutti i campi
                </div>
              )}
              <Button className="bn632-hover bn19" type="submit">
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
