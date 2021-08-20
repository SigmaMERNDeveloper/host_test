import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  let history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    Axios.post("https://test-app-login-register.herokuapp.com/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
      history.push("/login");
    });
  };

  return (
    <div className="form-section">
      <div className="container">
        <div className="row">
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button onClick={handleRegister}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
