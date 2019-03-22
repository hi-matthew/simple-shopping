import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import inventoryReducer from "./inventoryReducer";
import toggleCartStatus from "./cartReducer";

const rootReducer = combineReducers({
  productToggle: toggleReducer,
  inventory: inventoryReducer,
  cartStatus: toggleCartStatus
});

export default rootReducer;
