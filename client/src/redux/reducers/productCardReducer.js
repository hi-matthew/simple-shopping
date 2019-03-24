import { MODAL_IS_ACTIVATED } from "../actionTypes";

const detailsModalActivated = (state = false, action) => {
  switch (action.type) {
    case MODAL_IS_ACTIVATED: {
      return !state;
    }
    default:
      return state;
  }
};

export default detailsModalActivated;
