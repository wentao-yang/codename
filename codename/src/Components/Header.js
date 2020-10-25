import React, { useState } from 'react';
import {
    Navbar, 
    Dropdown,
    DropdownButton,
    Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {

    const scrollToContent = (eventKey) => {
        console.log(eventKey)
        switch (eventKey) {
            case 1:
                this.section1.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 2:
                this.section2.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 3:
                break;
            case 4:
                this.aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
   
    return (
    <div className='Header'>
      {/* App Name on far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>
      
      {/* Drop down for page jumps: bug can't get to right side */}
                <DropdownButton
                  variant="dark"
                    title="Scroll to"
                    size="lg"
                  id="dropdown-menu-align-right"
                >
                    <Dropdown.Item eventKey="1" onSelect={scrollToContent} >Map</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onSelect={scrollToContent} >COVID-19 Data</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onSelect={scrollToContent} >Methodology</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onSelect={scrollToContent} >About</Dropdown.Item>
              </DropdownButton> 
                
      {/* Links to different webpages on far right*/}
      </Navbar>
    </div>
  );
}

export default Header;
