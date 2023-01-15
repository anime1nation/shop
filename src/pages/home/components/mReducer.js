import { product } from "app-manager/store/product";

export const initialState = {
  product:product,
  totalAmount:0,
  totalItem:0,
};

export const reducer = (state, action) => {
  if (action.type === "inc") {
    const updatedCart = state.product.map((quan) => {
      if (quan.ID === action.id) {
        return { ...quan, quantity: quan.quantity + 1 };
      }
      return quan;
      
    });
    
    console.log("dsds",updatedCart)
    return { ...state, product: updatedCart };
  }

  if (action.type === "dec") {
    const updatedCart = state.product
      .map((quan) => {
        if (quan.ID === action.id) {
          return { ...quan, quantity: quan.quantity - 1 };
        }
        return quan;
      })
      // .filter((quan) => quan.quantity !== 0);
    return { ...state, product: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.product.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    console.log("dsdsdsd",totalAmount,totalItem)
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
