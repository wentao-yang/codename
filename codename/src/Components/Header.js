import React from 'react';
import {
    Navbar, 
    Nav,
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      {/* App Name on the far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>

      {/* Links to different webpages */}

              <DropdownButton
                  menuAlign="right"
                  title="Scroll to"
                  id="dropdown-menu-align-right"
              >
                  <Dropdown.Item eventKey="1">Map</Dropdown.Item>
                  <Dropdown.Item eventKey="2">News</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Statistics</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Citations</Dropdown.Item>
                  </DropdownButton>
                  
      </Navbar>
    </div>
  );
}

export default Header;
