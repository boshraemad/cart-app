import { useDispatch ,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/products-slice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row ,Col} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router";
import { addToCart } from '../rtk/slices/cart-slice';
function Products(){
    let products=useSelector(state=>state.products);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    return(
        <>
       <Container className="py-5">
       <Row className="py-5 align-items-center d-flex justify-content-start">
        {products.map((product)=>{
             return (
                    <Col key={product.id}>
                    <Card style={{ width: '18rem',height:'570px'}} className="p-2 mb-3">
                  <Card.Img variant="top" src={product.image} style={{height:"300px", width:'260px'}}/>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="fs-6">
                      {product.description.slice(0,60)}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{dispatch(addToCart(product))}}>add to cart</Button>
                    <Link to="" className="btn btn-primary ms-2">details</Link>
                  </Card.Body>
                </Card>
                    </Col>
              );
        })}
        </Row>
       </Container>

        </>
    );
}

export default Products;