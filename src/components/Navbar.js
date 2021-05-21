import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Navbar({ loggedInUser, setCurrentUser }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return loggedInUser ? (
    <>
    <div class="welcome">
      <p >Welcome {loggedInUser.username}</p></div>
      <div class="button-up">
          <NavLink to="/">
          <Button color="danger"onClick={logoutUser}>Logout</Button>
          </NavLink>
          &nbsp;
          <NavLink activeStyle={{ color: "red" }} exact to="/destiny">
          <Button color="primary"> List</Button>
          </NavLink>
          &nbsp;
          <NavLink activeStyle={{ color: "red" }} exact to="/destiny/add">
            <Button color="success">Add Destiny</Button>
          </NavLink>
          &nbsp;
          <NavLink activeStyle={{ color: "red" }} exact to="/search">
          <Button color="success"> Search Destiny</Button>
          </NavLink>
       </div>
    </>
  ) : (
    <div class="button-botom">
      <NavLink activeStyle={{ color: "red" }} exact to="/signup">
        <Button color="danger"> Signup</Button>
      </NavLink>
      &nbsp;
      <NavLink activeStyle={{ color: "red" }} exact to="/login">
        <Button color="danger"> Login</Button>
      </NavLink>
    </div>
  );
}
export default Navbar;
