import logo from './logo.svg';
import './App.css';
import Products from "./components/products";
import Cart from "./components/cart.js";
import  AppNavbar from "./components/nav.js";
import { Route,Routes } from 'react-router';
function App() {
  return (
    <>
    < AppNavbar/>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  );
}

export default App;
