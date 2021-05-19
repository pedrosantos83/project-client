import React from "react";
import { NavLink } from "react-router-dom";
import { signup, uploadFile } from "../api";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    country: "",
    imageUrl: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileChange = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, country, imageUrl } = this.state;
    const uploadData = new FormData();
    uploadData.append("file", imageUrl);
    //1. Upload the image to our api
    const response = await uploadFile(uploadData);
    const newUser = {
      username,
      email,
      password,
      country,
      imageUrl: response.data.fileUrl,
    };

    await signup(newUser);
    this.props.history.push("/");
  };

  render() {
    const { username, password, email, country, imageUrl } = this.state;
    return (
      <div class="Signup_box">
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
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
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <label>Image</label>
            <input type="file" onChange={this.handleFileChange} />
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
            <Button color="danger">Signup</Button>
          </FormGroup>

          <FormGroup>
            <p>
              {" "}
              Already have account?
              <NavLink to="/login"> Login</NavLink>
            </p>
          </FormGroup>
        </form>
      </div>
    );
  }
}
export default Signup;
