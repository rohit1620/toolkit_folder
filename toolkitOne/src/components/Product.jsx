// import React, { useState, useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux_toolkit/slice";
import { fetchData } from "../redux_toolkit/productSlice";
import { useEffect, useState } from "react";
import Single from "./Single";

export default function Product() {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.cart.value);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const selector = useSelector((state) => state.product.items);
  console.log("data fetch", selector);

  return (
    <div>
      {/* <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(addItem(2))}
      >
        Add TO Cart
      </button>{" "}
      &nbsp; &nbsp;
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(removeItem(2))}
      >
        Remove TO Cat
      </button>
      &nbsp; &nbsp;
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(clearItem(2))}
      >
        clear cart
      </button>{" "}
      &nbsp; &nbsp; */}
      {/* <span style={{ color: "green", fontWeight: "bold", fontSize: "30px" }}>
        show :{data}
      </span> */}
      <div id="product">
        {
          // selector.length &&
          selector.map((el, index) => {
            return <Single key={index} data={el} />;
          })
        }
      </div>
    </div>
  );
}
