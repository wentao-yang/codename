import {
    Navbar, 
    Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {

    return (
    <div className='Header'>
      {/* App Name on the far left */}
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>CodeName</Navbar.Brand>

      {/* Links to different webpages on far right*/}
      <Nav className='ml-auto'>
        <Nav.Link as={Link} to='#map'>Map</Nav.Link>
        <Nav.Link as={Link} to='#analysis'>Analysis</Nav.Link>
        <Nav.Link as={Link} to='#methodology'>Methodology</Nav.Link>
      </Nav>

      </Navbar>
    </div>
  );
}

export default Header;
