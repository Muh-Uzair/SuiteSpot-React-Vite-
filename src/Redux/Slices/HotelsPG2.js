import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
  displayArr: [],
};

// create slice
const HotelsPG2Reducer = createSlice({
  name: "HotelsPG2",
  initialState,
  reducers: {
    setDisplayArr(state, action) {
      state.displayArr = action.payload;
    },
  },
});

export const { setDisplayArr } = HotelsPG2Reducer.actions;

// Export the reducer to be used in the store
export default HotelsPG2Reducer.reducer;
