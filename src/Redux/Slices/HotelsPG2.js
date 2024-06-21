import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
  displayArr: [],
  hotelID: "",
};

// create slice
const HotelsPG2Reducer = createSlice({
  name: "HotelsPG2",
  initialState,
  reducers: {
    setDisplayArr(state, action) {
      state.displayArr = action.payload;
    },
    setHotelID(state, action) {
      state.hotelID = action.payload;
    },
  },
});

export const { setDisplayArr, setHotelID } = HotelsPG2Reducer.actions;

// Export the reducer to be used in the store
export default HotelsPG2Reducer.reducer;
