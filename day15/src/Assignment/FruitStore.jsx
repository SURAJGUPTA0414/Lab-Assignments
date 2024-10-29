import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import FruitReducer from './FruitReducer';

const store = createStore(FruitReducer, composeWithDevTools());

export default store;
