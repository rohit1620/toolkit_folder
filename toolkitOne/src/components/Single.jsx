import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux_toolkit/slice";
import styles from "./single.module.css";

const Single = ({ data }) => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.cart.items);
  console.log("check data", check);

  const { category, image, name, price, id } = data;

  return (
    <div className={styles.singleItem}>
      <img src={image} alt="" />
      <div>
        <h2>{category}</h2>
        <h4>{name}</h4>
        <p>{price}</p>
        {check.find((value) => value.id == id) ? (
          <button
            onClick={() => dispatch(removeItem(id))}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button onClick={() => dispatch(addItem(data))}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Single;
