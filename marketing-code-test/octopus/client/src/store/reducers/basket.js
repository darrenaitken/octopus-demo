import { BASKET_ADD, BASKET_REMOVE } from "../../js/constants";
import BasketItem from "../../js/BasketItem";

const initialState = {
  arrItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const basketAdd = (payload) => ({
  type: BASKET_ADD,
  payload,
});

export const basketRemove = (payload) => ({
  type: BASKET_REMOVE,
  payload,
});

const basketReducer = (state = initialState, action) => {
  const { payload } = action;
  let arrItemsTemp = [...state.arrItems];
  let existingItem = {};

  // Remove the same item if it was already added
  // (we can add this back in again later if more of the same item was added)
  // This is only applicable if we have an action (add or remove) from our payload
  if (payload) {
    existingItem = arrItemsTemp.find((item) => item.id === payload.id);
    arrItemsTemp = arrItemsTemp.filter((item) => item.id !== payload.id);
  }

  switch (action.type) {
    case BASKET_ADD:
      let basketItem = new BasketItem();

      // Item was added before so increase quantity
      if (existingItem) {
        basketItem.id = payload.id;
        basketItem.product = payload.product;
        basketItem.price = payload.price;
        basketItem.quantity = existingItem.quantity + payload.quantity;
      } else {
        basketItem = payload;
      }

      arrItemsTemp.push(basketItem);
      break;
    case BASKET_REMOVE:
      break;
    default:
      return state;
  }

  const totalQuantityTemp = arrItemsTemp
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalPriceTemp = arrItemsTemp
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return {
    ...state,
    arrItems: arrItemsTemp,
    totalQuantity: totalQuantityTemp,
    totalPrice: totalPriceTemp,
  };
};

export default basketReducer;
