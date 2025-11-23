// import React, { useState, useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux_toolkit/slice";
import { fetchData } from "../redux_toolkit/productSlice";
import { useEffect, useState } from "react";

export default function Product() {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.cart.value);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const selector = useSelector((state) => state.product.items);
  console.log("data fetch", selector);

  return (
    <div className="product-page">
      {/* LEFT IMAGE SECTION */}
      <div className="left">
        <img
          src="https://m.media-amazon.com/images/I/81CvrrQyz3L._SX522_.jpg"
          alt="Product"
          className="main-img"
        />

        <div className="thumbnail-box">
          <img
            src="https://m.media-amazon.com/images/I/41Qzm33al3L._SS100_.jpg"
            className="thumb"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41Qzm33al3L._SS100_.jpg"
            className="thumb"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41Qzm33al3L._SS100_.jpg"
            className="thumb"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41Qzm33al3L._SS100_.jpg"
            className="thumb"
            alt=""
          />
        </div>
      </div>

      {/* RIGHT DETAILS SECTION */}
      <div className="right">
        <h2 className="title">
          Pigeon by Stovekraft 3 Litre Special Plus Hard Anodised Inner Lid
          Induction Base Pressure Cooker (Black) BIS Certified
        </h2>

        <div className="rating-row">
          <span className="rating">★ 4.1</span>
          <span className="count">(5,797)</span>
          <span className="amazon-choice">Amazon’s Choice</span>
        </div>

        <p className="bought">3K+ bought in past month</p>

        <div className="price-row">
          <span className="discount">-60%</span>
          <span className="price">₹1,029</span>
        </div>

        <p className="mrp">
          M.R.P.: <s>₹2,549</s>
        </p>

        <p className="tax">Inclusive of all taxes</p>

        <div className="offers">
          <h3>Offers</h3>
          <div className="offer-box">Cashback: Upto ₹30 Amazon Pay Balance</div>
          <div className="offer-box">Bank Offer: Upto ₹1,000 off on cards</div>
          <div className="offer-box">
            Partner Offer: GST invoice available
          </div>{" "}
          <br />
          <button
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
          </button>
          <br /> <br />
          <h1>show :{data}</h1>
        </div>
      </div>
    </div>
  );
}
