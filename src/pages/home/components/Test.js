import React, { useContext } from "react";
import { CartContext } from "./Card";

export default function Test() {
  const {totalAmount} = useContext(CartContext);
  console.log("i m in test");
  return <div>{totalAmount}</div>;
}
