import React, { useContext} from "react";
import { CartContext } from "App";
import Cart from "pages/cart/Cart";
import "./test.css"






export default function Test() {
  const { item, totalAmount, totalItem,emptycart } = useContext(CartContext);
  
return(
  <div className="rum">
  <div className="ca">
        <div className="car">
          <u>
            <i>Cart</i>
          </u>
        </div>
        <div>
        {item.map((curItem) => {
          return <Cart key={curItem.ID} {...curItem} />;
        })}
        </div>
        <div className="tot">
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
)
}
