import React from 'react';
import {
    Button,
    Navbar
} from 'react-bootstrap';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

 
    return (
        <div className='fixed-bottom' position="fixed">
          
         <Button variant="dark" style={{ float: 'right' }} size="md" onClick={scrollToTop}>Scroll to Top</Button>
            <Navbar to="/" className="bg-dark text-white" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'red', textDecoration: 'none' }}>Copyright &copy; 2020 Codename

                </Navbar>  
                </div>
        
        
    );
}

export default Footer;
