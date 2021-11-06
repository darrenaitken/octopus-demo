import { combineReducers, createStore } from "redux";

// Reducers
import basketReducer from "./reducers/basket";
import basketModalReducer from "./reducers/basketModal";

const allReducers = combineReducers({
  basket: basketReducer,
  basketModal: basketModalReducer,
});

const store = createStore(allReducers);

export default store;
