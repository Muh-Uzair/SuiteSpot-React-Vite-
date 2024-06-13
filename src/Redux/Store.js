import loadingReducer from "./Slices/loadingSlice";
import cityReducer from "./Slices/citySlice";
import hotelsReducer from "./Slices/hotelsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loadingState: loadingReducer,
    cityState: cityReducer,
    hotelState: hotelsReducer,
  },
});

export default store;
