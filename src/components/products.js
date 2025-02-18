import { useDispatch ,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/products-slice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row ,Col} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
function Products(){
    let products=useSelector(state=>state.products);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    return(
        <>
       <Container>
       <Row className="mt-4">
        {products.map((product)=>{
             return (
                    <Col key={product.id}>
                    <Card style={{ width: '18rem'}} className="p-2">
                  <Card.Img variant="top" src={product.image} style={{height:"340px"}}/>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button variant="primary">add to cart</Button>
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