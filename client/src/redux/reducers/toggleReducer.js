import { TOGGLE_PRODUCTS } from "../actionTypes";

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
export default toggleReducer;
