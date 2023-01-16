import React, { useContext } from "react";
import { CartContext } from "./Card";
import Item from "./Item.jsx";
import Cart from "pages/cart/Cart";
import "./prod.css";

export default function Prod() {
  const { item, totalAmount, totalItem ,emptycart} = useContext(CartContext);
  //   if(item.length === 0){
  return (
    <div className="home">
      <div id="fle">
        {item.map((curItem) => {
          return <Item key={curItem.ID} {...curItem} />;
        })}
      </div>
      <div className="cart1">
        <div className="carthead">
          <u>
            <i>Cart</i>
          </u>
        </div>
        <div></div>
        {item.map((curItem) => {
          return <Cart key={curItem.ID} {...curItem} />;
        })}
        <div className="totall">
          <p>Total Quantity {totalItem}</p>
          <p>Total Cart Value ₹{totalAmount}</p>
        </div>
        <div className="buy">
        {totalItem === 0 ? (
          ""
        ) : (
          <button id="buy" type="submit" onClick={emptycart}>
            Purchase
          </button>
        )}
        </div>
      </div>
    </div>
  );
}
