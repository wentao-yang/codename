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
      {/* App Name on far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>
      <Navbar.Brand as={Link} to='/'>Codename</Navbar.Brand>

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

                  
=======
      {/* Links to different webpages on far right*/}
      <Nav className='ml-auto'>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/'>Methodology</Nav.Link>
        <Nav.Link as={Link} to='/'>About</Nav.Link>
      </Nav>
>>>>>>> c899581dfed2b70c72dc5629a1a47c1f06a9c972
      </Navbar>
    </div>
  );
}

export default Header;
