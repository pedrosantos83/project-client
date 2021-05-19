import React from "react";
import { NavLink } from "react-router-dom";
import { login } from "../api";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const response = await login(username, password);
    this.props.setCurrentUser(response.data);
    this.props.history.push("/");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div class="Signup_box">
        <form onSubmit={this.handleFormSubmit}>
          <FormGroup row>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="danger">Login</Button>
          </FormGroup>

          <FormGroup>
            Don´t have account?
            <NavLink to="/signup"> Signup</NavLink>
          </FormGroup>
        </form>
      </div>
    );
  }
}
export default Login;
