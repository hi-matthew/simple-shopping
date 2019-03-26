import * as types from "./actionTypes";

export const toggleProducts = e => {
  const { innerHTML: productType, parentNode } = e.target;
  return {
    type: types.TOGGLE_PRODUCTS,
    payload: {
      productType,
      parentNode
    }
  };
};

export const loadInventory = inventory => {
  return {
    type: types.LOAD_INVENTORY,
    payload: {
      inventory
    }
  };
};

export const toggleCartStatus = () => {
  return {
    type: types.CART_STATUS
  };
};

export const toggleModal = focusProduct => {
  return {
    type: types.MODAL_STATUS,
    payload: {
      focusProduct
    }
  };
};

export const updateQuantity = e => {
  const { innerHTML: operator } = e.target;
  return {
    type: types.QUANTITY,
    payload: {
      operator
    }
  };
};

export const addToCart = newItem => {
  return {
    type: types.CART,
    payload: {
      newItem
    }
  };
};
