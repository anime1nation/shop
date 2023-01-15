import "./item.css";
import React, { useContext } from "react";
import { CartContext } from "./Card";

export default function Item({
  ID,
  pname,
  color,
  price,
  Quality,
  design,
  quantity,
  ImgUrl,
}) {
  const { increment, decrement } = useContext(CartContext);
  return (
    <div id={ID} className="card">
      <div className="product">
        <img alt="" src={ImgUrl} />
      </div>
      <div className="product-detail">
        <h3>
          {design} {color} {Quality} {pname}
        </h3>
        <div className="price">
          <h2>₹{price}</h2>
          <div id="qty">Quantity
            <button onClick={() => decrement(ID)} disabled={quantity ? 0 : 1}>
              <b>-</b>
            </button>
            {quantity}
            <button onClick={() => increment(ID)}>
              <b>+</b>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
