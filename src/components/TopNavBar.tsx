import classes from '../styles/components/TopNavBar.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavBar : React.FC = () => {
	const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Jamie-Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/info')}>유저 정보</Nav.Link>
            <NavDropdown title="활동입력" id="basic-nav-dropdown">
						<NavDropdown.Item onClick={()=>navigate('/info')}>유저정보</NavDropdown.Item>
						<NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>navigate('/activity/SW핵심역량')}>SW핵심역량</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/activity/SW산학협력·창업역량')}>SW산학협력·창업역량</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/activity/SW가치확산')}>SW가치확산</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/activity/SW융합')}>SW융합</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
