import React, { useContext } from "react";
import { CartContext } from "App.js";
import Item from "./Item.jsx";
import Cart from "pages/cart/Cart";
import "./prod.css";
import { useNavigate } from "react-router-dom";

export default function Prod() {
  const { item, totalAmount, totalItem } = useContext(CartContext);

  const Navigate = useNavigate();
  const emptycart = (e) => {
    e.preventDefault();
    Navigate("/cart");
  };
  //   if(item.length === 0){
  return (
    <>
      
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
          <div>
            {item.map((curItem) => {
              return <Cart key={curItem.ID} {...curItem} />;
            })}
          </div>
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
    </>
  );
}
