import { useSelector,useDispatch} from "react-redux";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { deleteFromCart , clearCart } from "../rtk/slices/cart-slice";
function Cart(){
    let products=useSelector(state=>state.cart);
    let dispatch=useDispatch();
    return(
       <Container className="py-5">
                <button className="btn mt-4 btn-primary" onClick={()=>{dispatch(clearCart())}}>clear cart</button>
                <Table striped bordered hover className=" mt-4">
      <thead>
        <tr>
          <th>id</th>
          <th>product Name</th>
          <th>product</th>
          <th>price</th>
          <th>quantity</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
            {products.map((product)=>{
                return(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} style={{width:"100px" , height:"auto"}}/></td>
                            <td>{product.price}</td>
                            <td>1</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{dispatch(deleteFromCart(product))}}>remove</button>
                                {/* plus icon minus icon to control product quatity*/}
                            
                            </td>
                        </tr>
                )
            })}
      </tbody>
    </Table>
       </Container>
    )
}
export default Cart;