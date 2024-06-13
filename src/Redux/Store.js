import { combineReducers, createStore } from "redux";
import loadingReducer from "./Slices/loadingSlice";
import cityReducer from "./Slices/citySlice";

const rootReducer = combineReducers({
  loadingState: loadingReducer,
  cityState: cityReducer,
});

const store = createStore(rootReducer);

export default store;
