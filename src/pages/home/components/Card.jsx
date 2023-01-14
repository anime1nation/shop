import "./card.css";
import { product } from "app-manager/store/product";
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "inc") {
    return state + 1;
  }
  if (action.type === "dec") {
    return state - 1;
  }
};

function Pro() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="fle">
      {product.map((ele) => (
        <div key={ele.ID} className="card">
          <div className="product">
            <img alt="" src={ele.ImgUrl} />
          </div>
          <div className="product-detail">
            <h3>
              
                {ele.design} {ele.color} {ele.pname}
              
            </h3>
            <div className="price">
              <h2>₹{ele.p_price}</h2>


              <div id="qty">
                  <button onClick={() => dispatch({ type: "dec",id:ele.ID })} disabled={state ? 0 : 1}><b>-</b></button>
                  {state}
                <button
                  onClick={() => dispatch({ type: "inc",id:ele.ID })}
                >
                  <b>+</b>
                </button>
              </div>
              <button type="button"  id="buy">
                Buy Now
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default function Card() {
  return (
    <div>
      <Pro />
    </div>
  );
}
