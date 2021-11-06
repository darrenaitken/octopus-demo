import { BASKET_SHOW, BASKET_HIDE } from "../../js/constants";

const initialState = {
  show: false,
};

export const showBasket = () => ({
  type: BASKET_SHOW,
});

export const hideBasket = () => ({
  type: BASKET_HIDE,
});

const basketModalReducer = (state = initialState, action) => {
  return {
    ...state,
    show: action.type === BASKET_SHOW,
  };
};

export default basketModalReducer;
