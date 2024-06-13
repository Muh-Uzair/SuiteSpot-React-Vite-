// const loadingInitialState = {
//   isLoading: false,
// };

// export default function loadingReducer(state = loadingInitialState, action) {
//   switch (action.type) {
//     case "isLoading/true":
//       return { ...state, isLoading: true };

//     case "isLoading/false":
//       return { ...state, isLoading: false };

//     default:
//       return state;
//   }
// }
// export function isLoading_true() {
//   return { type: "isLoading/true" };
// }

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isLoading: false,
};

// Create a slice
const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoadingTrue(state) {
      state.isLoading = true;
    },
    setIsLoadingFalse(state) {
      state.isLoading = false;
    },
  },
});

// Export the actions generated from the slice
export const { setIsLoadingTrue, setIsLoadingFalse } = loadingSlice.actions;

// Export the reducer to be used in the store
export default loadingSlice.reducer;
