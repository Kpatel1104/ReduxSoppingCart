import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/login');
  };
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  console.log("total", items);

  var total = 0;
  for (var i in items) {
    total += items[i].price;
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total">
        <h5> SubTotal({items.length}) </h5>
        <h5> Total :{total} </h5>
        <button className="btn" onClick={handleButtonClick} > Proceed to Checkout </button>
      </div>
    </div>
  );
};

export default Cart;
