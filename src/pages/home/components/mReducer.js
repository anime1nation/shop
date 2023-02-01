export const reducer = (state, action) => {
  if (action.type === "inc") {
    const updatedCart = state.item.map((quan) => {
      if (quan.ID === action.id) {
        return { ...quan, quantity: quan.quantity + 1 };
      }
      return quan;
    });

    console.log("dsds", updatedCart);
    return { ...state, item: updatedCart };
  }

  if (action.type === "dec") {
    const updatedCart = state.item.map((quan) => {
      if (quan.ID === action.id) {
        return { ...quan, quantity: quan.quantity - 1 };
      }
      return quan;
    });
    return { ...state, item: updatedCart };
  }


  if (action.type === "empty_cart") {
    window.location.href='/game';
    return { ...state, item: [] };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
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
    console.log("dsdsdsd", totalAmount, totalItem);
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
