import { TOGGLE_PRODUCTS } from "../actionTypes";

const toggleReducer = (state = "shirts", action) => {
  switch (action.type) {
    case TOGGLE_PRODUCTS: {
      const { productType, parentNode } = action.payload;
      if (productType.toLowerCase() !== state) {
        parentNode.childNodes.forEach(type => {
          return type.classList.contains("product-type--active")
            ? type.classList.remove("product-type--active")
            : type.classList.add("product-type--active");
        });
      }
      return productType.toLowerCase();
    }
    default:
      return state;
  }
};

export default toggleReducer;
