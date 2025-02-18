import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
function AppNavbar(){
    return(
        <Navbar bg="primary" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Link to="/" className='nav-brand text-light text-decoration-none fs-5 fw-bold me-4'>Shopify</Link>
          <Nav className="me-auto">
            <Link to="/" className='nav-link text-light'>Products</Link>
            <Link to="/cart" className='nav-link text-light'>Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default AppNavbar;
