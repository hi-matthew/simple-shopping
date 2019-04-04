import {
  CART_STATUS,
  ADD_TO_CART,
  MODAL_STATUS,
  REMOVE_ITEM
} from "../actionTypes";

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
      const duplicateOrder = state.filter(
        cartItem =>
          cartItem.focusProduct.productName === focusProduct.productName &&
          cartItem.size === size
      );

      if (duplicateOrder.length) {
        const index = state.indexOf(duplicateOrder[0]);
        const stateClone = [...state];
        stateClone[index].quantity += quantity;
        return stateClone;
      }

      return [
        ...state,
        {
          focusProduct,
          size,
          quantity
        }
      ];
    }
    case REMOVE_ITEM: {
      const { size, productName } = action.payload;
      const itemToRemove = state.filter(
        item =>
          item.focusProduct.productName === productName && item.size === size
      )[0];
      const indexToRemove = state.indexOf(itemToRemove);
      return indexToRemove === 0
        ? state.slice(1)
        : indexToRemove === state.length - 1
        ? state.slice(0, state.length - 1)
        : state.slice(0, indexToRemove).concat(state.slice(indexToRemove + 1));
    }
    default:
      return state;
  }
};

const initialState = {
  isActive: false,
  message: ""
};

export const confirmMessage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { size, quantity, focusProduct } = action.payload.order;
      const { productName } = focusProduct;
      const productType =
        productName.includes("Simple") && quantity > 1
          ? "shirts"
          : productName.includes("Simple") && quantity === 1
          ? "shirt"
          : productName.includes("Pair") && quantity > 1
          ? "pairs of shoes"
          : "pair of shoes";
      const hasOrHave = quantity > 1 ? "have" : "has";

      return {
        isActive: true,
        message: `(${quantity}) ${size} "${productName}" ${productType} ${hasOrHave} successfully been added to your cart!`
      };
    }
    case MODAL_STATUS: {
      return initialState;
    }
    default:
      return state;
  }
};

export const calculateSubtotal = (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { focusProduct, quantity } = action.payload.order;
      return state + focusProduct.price * quantity;
    }
    default:
      return state;
  }
};

export default toggleCartStatus;
