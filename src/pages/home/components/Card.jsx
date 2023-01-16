import "./card.css";
import React, { createContext ,useReducer,useEffect} from "react";
import Prod from "./Prod";
import { reducer} from './mReducer.js';
import { product } from "app-manager/store/product";


export const CartContext = createContext();

export const initialState = {
  item:product,
  totalAmount:0,
  totalItem:0,
};

export default function Card() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const emptycart = ()=>{
    return dispatch({
      type:"empty_cart"
    });
  };

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
  }, [state.item]);


  return (
    <div>
      <CartContext.Provider value={{ ...state ,increment,decrement,emptycart}}>
      <Prod/>
      
      </ CartContext.Provider>
    </div>
  );
};
