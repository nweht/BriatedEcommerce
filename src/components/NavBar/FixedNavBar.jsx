import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function CollapsibleExample() {

    return (
    <Navbar collapseOnSelect expand="md"  variant="dark" sticky="top" bg="dark">
      <Container>
        <Link to='/'>
        <Navbar.Brand>BRIATED GAMING</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Consolas" id="collasible-nav-dropdown">
              <NavDropdown.Item>PS5</NavDropdown.Item>
              <NavDropdown.Item>Juegos</NavDropdown.Item>
              <NavDropdown.Item>Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
          
                <Nav className="me-auto">
                <Nav.Link href="#" style={{paddingLeft : '20px'}}> <CartWidget/> </Nav.Link>
                </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;