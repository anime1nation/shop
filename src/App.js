import Header from "./common/header/Header.jsx"
import "./App.css";
import Routes from "./Routers";
import React, {createContext,useReducer,useEffect} from "react";
import { reducer } from "pages/home/components/mReducer.js";
import { product } from "app-manager/store/product";

export const CartContext = createContext();

export const initialState = {
  item:product,
  totalAmount:0,
  totalItem:0,
};

function App() {
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
    <>
    <div className="App">
      <CartContext.Provider value={{ ...state ,increment,decrement,emptycart}}>
      
      <Header />
      
      <Routes/>
      </ CartContext.Provider>
      </div>
      </>
  );
}

export default App;