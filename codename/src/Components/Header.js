import React from 'react';
import {
  Navbar, 
  Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      {/* App Name on far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>Codename</Navbar.Brand>

      {/* Links to different webpages on far right*/}
      <Nav className='ml-auto'>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/'>Methodology</Nav.Link>
        <Nav.Link as={Link} to='/'>About</Nav.Link>
      </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
