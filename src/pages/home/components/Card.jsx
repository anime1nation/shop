import "./card.css";
import React, { createContext ,useReducer,useEffect} from "react";
import Prod from "./Prod";
import { reducer, initialState } from './mReducer.js';
// import Cart from "pages/cart/Cart";
// import { product } from "app-manager/store/product";

export const CartContext = createContext();

export default function Card() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (ID) => {
    return dispatch({
      type: "inc",
      id: ID,
    });
  };

  
  const decrement = (ID) => {
    return dispatch({
      type: "dec",
      id: ID,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.product]);


  return (
    <div>
      <CartContext.Provider value={{ ...state ,increment,decrement}}>
      <Prod/>
      </ CartContext.Provider>
    </div>
  );
}
