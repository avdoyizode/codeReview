import { combineReducers, createStore } from "redux";
import { expenses } from "./reducers/expenseReducer";
const reducer = combineReducers({
  expenses,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;
