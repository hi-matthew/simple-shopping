import { LOAD_INVENTORY } from "../actionTypes";

const initialState = {
  shirts: [],
  shoes: []
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INVENTORY: {
      const { shirts, shoes } = action.payload.inventory;
      return {
        ...state,
        shirts: [...state.shirts, ...shirts],
        shoes: [...state.shoes, ...shoes]
      };
    }
    default:
      return state;
  }
};

export default inventoryReducer;
