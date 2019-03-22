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

export const toggleCartStatus = e => {
  const { tagName } = e.target;
  let menuContainer;
  // pass parent element of the menu
  if (tagName === "svg") {
    menuContainer = e.target.parentElement;
  } else if (tagName === "path") {
    menuContainer = e.target.parentElement.parentElement;
  } else {
    menuContainer = e.target;
  }
  return {
    type: types.CART_STATUS,
    payload: {
      menuContainer
    }
  };
};
