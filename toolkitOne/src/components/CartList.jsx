import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./cart.module.css";
import { removeItem } from "../redux_toolkit/slice";

const CartList = () => {
  const dispatch = useDispatch();
  const cartSelect = useSelector((state) => state.cart.items);
  const [cartNew, setCartNew] = useState(cartSelect);
  console.log("cartSelect", cartSelect);
  let total = 0;
  for (let i = 0; i < cartNew.length; i++) {
    total =
      total +
      (cartNew[i].num > 1
        ? cartNew[i].price * cartNew[i].num
        : cartNew[i].price);
    console.log("bitar", total);
  }
  console.log("price rate", total);

  const manageData = (id, value) => {
    let num = Number(value);
    const cartData = cartNew.map((el) => (el.id == id ? { ...el, num } : el));
    setCartNew(cartData);
    console.log("cartdata", cartData);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.secondDiv}>
          <h2>Cart List Item</h2>

          <h3>
            {" "}
            <span style={{ color: "blue" }}> Total:- </span>
            {total} Rupees
          </h3>
        </div>
        <div className={styles.cartDiv}>
          {cartNew.length > 0 &&
            cartNew.map((el) => (
              <div className={styles.thirdDiv}>
                <div className={styles.fourDiv}>
                  <img src={el.image} alt="imG" />
                  <div>
                    <h4>{el.category}</h4>
                    <p>{el.name}</p>
                  </div>
                </div>
                <div className={styles.fivebeforDiv}>
                  <input
                    type="number"
                    placeholder="quantity"
                    onChange={(event) => manageData(el.id, event.target.value)}
                  />
                  <div className={styles.fiveDiv}>
                    <p>{el.num ? el.price * el.num : el.price} Rs</p>
                    <button onClick={() => dispatch(removeItem(el.id))}>
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CartList;
