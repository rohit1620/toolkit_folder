import React from "react";

const Item = ({ data }) => {
  const { category, image, name, price } = data;
  return (
    <div>
      <img src={image} alt="" />
      <h4>{category}</h4>
      <h5>{name}</h5>
      <p>{price}</p>
      <h1>Tiger</h1>
    </div>
  );
};

export default Item;
