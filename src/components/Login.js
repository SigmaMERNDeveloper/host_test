import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import "../styles/Login.css";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginDetails, setLoginDetails] = useState([]);

  const handleLogin = () => {
    Axios.post("https://test-app-login-register.herokuapp.com/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data[0].user_name === undefined) {
        setLoginDetails("No User LoggedIn!");
      } else {
        setLoginDetails(response.data[0].user_name);
      }
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
              <Button onClick={handleLogin}>Submit</Button>
            </Form>
          </div>
          <div className="uname">
            {loginDetails !== undefined || loginDetails !== 0 ? (
              <h2>{loginDetails}</h2>
            ) : (
              "No User LoggedIn!"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
