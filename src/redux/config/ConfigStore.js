import { createStore } from "redux";
import { combineReducers } from "redux";
import Stories from "../modules/Stories";

const rootReducer = combineReducers({
  Stories,
});
const store = createStore(rootReducer);

export default store;