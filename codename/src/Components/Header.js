import React, { useState } from 'react';
import {
    Navbar, 
    Dropdown,
    DropdownButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Header() {
    const [select, setSelect] = useState(false);


    const handleSelect = () => setSelect
        (!select);

    return (
    <div className='Header'>
      {/* App Name on the far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>

      {/* Drop down for page jumps: bug can't get to right side */}

                <DropdownButton
                  variant="dark"
                    title="Scroll to"
                    size="lg"
                  id="dropdown-menu-align-right"
                  onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="1" onSelect={handleSelect} >Map</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onSelect={handleSelect} >News</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onSelect={handleSelect} >Statistics</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onSelect={handleSelect} >Citations</Dropdown.Item>
              </DropdownButton> 

                  
      </Navbar>
    </div>
  );
}

export default Header;
