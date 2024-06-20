import loadingReducer from "./Slices/loadingSlice";
import cityReducer from "./Slices/citySlice";
import hotelsReducer from "./Slices/hotelsSlice";
import HotelsPG2Reducer from "./Slices/HotelsPG2";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loadingState: loadingReducer,
    cityState: cityReducer,
    hotelState: hotelsReducer,
    reduxHotelsPG2State: HotelsPG2Reducer,
  },
});

export default store;
