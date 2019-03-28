import { CART_STATUS, ADD_TO_CART } from "../actionTypes";

const toggleCartStatus = (state = "closed", action) => {
  switch (action.type) {
    case CART_STATUS: {
      return state === "closed" ? "open" : "closed";
    }
    default:
      return state;
  }
};

export const cartInventory = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { size, quantity, focusProduct } = action.payload.order;
      return [
        ...state,
        {
          focusProduct,
          size,
          quantity
        }
      ];
    }
    default:
      return state;
  }
};

export default toggleCartStatus;
