import React from "react";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./navbar.css";

export const Navbar = ({count}) => {
  // const cartItemCount = cartItems[id];
  return (
    <nav className="navbar">
      <section className="links">
        <Link to="/"> Shop </Link>
        <Link className = "cart-icon" to="/cart" style={{display: "flex" ,position: "relative"}}>
          <AiOutlineShoppingCart style={{fontSize: "35px"}}/>
          <div className="cart" style={{position: "absolute", left: "80%", bottom: "0",top: "0 " ,backgroundColor: "red", borderRadius: "0%", width: "25px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"}}>
          <sup>{count}</sup>
          </div>
          {/* {cartItems.size > 0 && <> ({cartItems.size})</>} */}
        </Link>
      </section>
    </nav>
  );
};
