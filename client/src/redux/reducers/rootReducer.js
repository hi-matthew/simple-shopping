import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import inventoryReducer from "./inventoryReducer";
import toggleCartStatus, { cartInventory, confirmMessage } from "./cartReducer";
import updateModal, { updateQuantity } from "./productCardReducer";

const rootReducer = combineReducers({
  productToggle: toggleReducer,
  inventory: inventoryReducer,
  cartStatus: toggleCartStatus,
  modalStatus: updateModal,
  quantity: updateQuantity,
  cart: cartInventory,
  confirmAddToCart: confirmMessage
});

export default rootReducer;
