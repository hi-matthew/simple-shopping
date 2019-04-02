import { TOGGLE_PRODUCTS, TOGGLE_PROFILE } from "../actionTypes";

const toggleReducer = (state = "shirts", action) => {
  switch (action.type) {
    case TOGGLE_PRODUCTS: {
      const { productType } = action.payload;
      return productType.toLowerCase();
    }
    default:
      return state;
  }
};

export const toggleProfile = (state = "closed", action) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return state === "closed" ? "open" : "closed";
    }
    default:
      return state;
  }
};

export default toggleReducer;
