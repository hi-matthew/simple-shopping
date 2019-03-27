import { MODAL_STATUS, QUANTITY } from "../actionTypes";

const initialState = {
  isActive: false,
  focusProduct: null
};

const updateModal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_STATUS: {
      return {
        isActive: !state.isActive,
        focusProduct: action.payload.focusProduct
      };
    }
    default:
      return state;
  }
};

export const updateQuantity = (state = 1, action) => {
  switch (action.type) {
    case QUANTITY: {
      const { operator } = action.payload;
      if (state === 1 && operator === "-") return state;
      return operator === "+" ? state + 1 : state - 1;
    }
    case MODAL_STATUS: {
      return 1;
    }
    default:
      return state;
  }
};

export default updateModal;
