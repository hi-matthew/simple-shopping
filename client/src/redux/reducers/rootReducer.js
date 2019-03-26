import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import inventoryReducer from "./inventoryReducer";
import toggleCartStatus, { addToCart } from "./cartReducer";
import updateModal, { updateQuantity } from "./productCardReducer";

const rootReducer = combineReducers({
  productToggle: toggleReducer,
  inventory: inventoryReducer,
  cartStatus: toggleCartStatus,
  modalStatus: updateModal,
  quantity: updateQuantity,
  cart: addToCart
});

export default rootReducer;
