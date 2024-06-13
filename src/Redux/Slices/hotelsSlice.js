import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  hotelsArr: [],
};

// Create a slice
const hotelsReducer = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotels(state, action) {
      state.hotelsArr = action.payload;
    },
    setHotelsEmpty(state) {
      state.hotelsArr = [];
    },
  },
});

export const { setHotels, setHotelsEmpty } = hotelsReducer.actions;

// Export the reducer to be used in the store
export default hotelsReducer.reducer;
