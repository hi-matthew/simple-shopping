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
      focusProduct: focusProduct || {}
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

export const addToCart = (e, focusProduct) => {
  e.preventDefault();
  const form = e.target;
  const { value: sizeValue } = form[0].selectedOptions[0];
  const order = {
    focusProduct,
    size: Number(sizeValue) || sizeValue,
    quantity: Number(form.quantity.value)
  };

  return {
    type: types.ADD_TO_CART,
    payload: {
      order
    }
  };
};

export const toggleProfile = () => {
  return {
    type: types.TOGGLE_PROFILE
  };
};

export const removeItem = obj => {
  const { quantity, size, focusProduct } = obj;
  return {
    type: types.REMOVE_ITEM,
    payload: {
      price: focusProduct.price,
      productName: focusProduct.productName,
      size,
      quantity
    }
  };
};
