import React from "react";
import './cart.css'

export default function Cart({
  ID,
  pname,
  color,
  Quality,
  design,
  quantity,
  price,
}) 
{
  if (quantity > 0) {
    return (
      <>
        <div className="listc">
          <h3><i>
            {design} {color} {Quality} {pname}
          </i></h3>
          <br />
          <div className="lab">
          <label className="span1">Qty:{quantity}</label>
          <label className="span2">Amount:{price}</label>
        </div>
        </div>
        <hr />
      </>
    );
  }
}
