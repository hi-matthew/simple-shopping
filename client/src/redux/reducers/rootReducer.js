import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import inventoryReducer from "./inventoryReducer";
import toggleCartStatus from "./cartReducer";
import detailsModelActivated from "./productCardReducer";

const rootReducer = combineReducers({
  productToggle: toggleReducer,
  inventory: inventoryReducer,
  cartStatus: toggleCartStatus,
  modalIsActivated: detailsModelActivated
});

export default rootReducer;
