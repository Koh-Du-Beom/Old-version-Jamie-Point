import classes from '../styles/components/TopNavBar.module.css';
import React from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavBar : React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Jamie-Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item> Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
