import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CollapsibleExample() {
  const { getTotalItemCount } = useContext(cartContext);
    return (
    <Navbar collapseOnSelect expand="md"  variant="dark" sticky="top" bg="dark">
      <Container>
        <Link to='/' style={{textDecoration:'none'}}>
        <Navbar.Brand >BRIATED GAMING</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Consolas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/console/PS5">PS5</NavDropdown.Item>
              <NavDropdown.Item href='/console/PC'>PC</NavDropdown.Item>
              <NavDropdown.Item href='/console/Nintendo Switch'>Nintendo Switch</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to={'/cart'}>
                <Nav className="me-auto">
                <Nav style={{paddingLeft : '20px'}}> <CartWidget/></Nav><span>{getTotalItemCount() > 0 && getTotalItemCount()}</span> 
                </Nav>
                </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;