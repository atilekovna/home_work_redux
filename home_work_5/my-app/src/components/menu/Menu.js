import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { fetchUsersAction } from "../../redux/actions";
import { useDispatch } from "react-redux";


function Menu() {

  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(fetchUsersAction())
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="me-2">register user</NavLink>
            <NavLink to="/users" onClick={getUsers}>users list</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;