import React from 'react';
import {
    Navbar, 
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const handleSelect = (e) => {
    console.log(e);
}

function Header() {
  return (
    <div className='Header'>
      {/* App Name on the far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>

      {/* Drop down for page jumps: bug can't get to right side */}

              <DropdownButton
                  alignRight
                  title="Scroll to"
                  id="dropdown-menu-align-right"
                  onSelect={handleSelect}
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
