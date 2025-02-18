import { useSelector,useDispatch} from "react-redux";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { deleteFromCart , clearCart, addToCart ,minusQuantity } from "../rtk/slices/cart-slice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
function Cart(){
    let products=useSelector(state=>state.cart);
    let dispatch=useDispatch();

    const totalPrice=products.reduce((acc,product)=>{
        acc+=product.price*product.quantity
        return acc;
    },0)
    return(
       <Container className="py-5">
                <button className="btn mt-4 btn-secondary" onClick={()=>{dispatch(clearCart())}}>clear cart</button>
                <h5 className="mt-5">total price: {totalPrice.toFixed(2)}$</h5>
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
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{dispatch(deleteFromCart(product))}}>remove</button>
                                <button className="btn" onClick={()=>{dispatch(addToCart(product))}}><FaPlus/></button>
                                <span>{product.quantity}</span>
                                <button className="btn" onClick={()=>{dispatch(minusQuantity(product))}}><FaMinus /></button>
                            
                            </td>
                        </tr>
                )
            })}
      </tbody>
    </Table>
            <button className="btn btn-success mt-4">Ckeck out <FaLongArrowAltRight /></button>
       </Container>
    )
}
export default Cart;