import React, { useContext } from "react";
import { CartContext } from "./Card";
import Item from "./Item.jsx";
import "./prod.css";

export default function Prod() {
  const { product } = useContext(CartContext);
  return (
        <div className="home">
          <div id="fle" >
            {product.map((curItem) => {
              return <Item key={curItem.ID} {...curItem} />;
            })}
          </div>
          <div className="cart1">
            <div>
                fdg
                <div>
                    dfs
                    <div>
fsdf
                    </div>
                </div>
            </div>
          </div>
        </div>
  );
}
