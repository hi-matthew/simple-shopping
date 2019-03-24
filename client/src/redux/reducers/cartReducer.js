import { CART_STATUS } from "../actionTypes";

const toggleCartStatus = (state = "closed", action) => {
  switch (action.type) {
    case CART_STATUS: {
      return state === "closed" ? "open" : "closed";
    }
    default:
      return state;
  }
};

export default toggleCartStatus;
