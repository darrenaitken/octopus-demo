import { combineReducers, createStore } from "redux";
import basketReducer from "./reducers/basket";

const allReducers = combineReducers({
  basket: basketReducer,
});

const store = createStore(allReducers);

export default store;
