import React from "react";

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
          <i>
            {design} {color} {Quality} {pname}
          </i>
          <br />
          <span className="span1">Qty:{quantity}</span>{"    "}
          <span className="span2">Amount:{price}</span>
        </div>
        <hr />
      </>
    );
  }
}
