import { CART_STATUS } from "../actionTypes";

const toggleCartStatus = (state = "closed", action) => {
  switch (action.type) {
    case CART_STATUS: {
      const { menuContainer: menu } = action.payload;
      // adjust styles
      if (menu.className.includes("closed")) {
        menu.classList.remove("closed");
        menu.classList.add("open");
      } else {
        menu.classList.remove("open");
        menu.classList.add("closed");
      }
      // adjust state
      return state === "closed" ? "open" : "closed";
    }
    default:
      return state;
  }
};

export default toggleCartStatus;
