import loadingReducer from "./Slices/loadingSlice";
import cityReducer from "./Slices/citySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loadingState: loadingReducer,
    cityState: cityReducer,
  },
});

export default store;
