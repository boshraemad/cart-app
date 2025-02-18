import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';

function AppNavbar(){
    let cart=useSelector(state=>state.cart);
    return(
        <Navbar bg="primary" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Link to="/" className='nav-brand text-light text-decoration-none fs-5 fw-bold me-4'>Shopify</Link>
          <Nav className="me-auto">
            <Link to="/" className='nav-link text-light'>Products</Link>
            <Link to="/cart" className='nav-link text-light position-relative'>Cart  <span className=" cart-num bg-light text-primary fw-bold rounded-circle d-flex align-items-center justify-content-center position-absolute">{cart.length}</span></Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default AppNavbar;
