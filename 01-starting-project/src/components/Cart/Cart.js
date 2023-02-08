import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItem = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 13.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal className={classes['cart-items']} onClose={props.onRemoval}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onRemoval}>Close</button>
        <button classname={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
