import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor:'powderblue',
      }}
    >
      <span className="logo">
        <h3> SHOPPING STORE </h3>
      </span>

      <div className="bar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <Link className="navLink" to="/login"> 
          Login
        </Link>
        <span className="cartcount">Cart: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
