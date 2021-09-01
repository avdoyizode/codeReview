import { combineReducers, createStore } from "redux";
import { expense } from "./reducers/expenseReducer";
const reducer = combineReducers({
  expenses: expense,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;
