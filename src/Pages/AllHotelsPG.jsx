import { createContext, useReducer } from "react";
import SearchHotelDisplayCMP from "../Components/HotelsPG/SearchHotelDisplayCMP";
import MapCMP from "../Components/HotelsPG/MapCMP";
//import HotelDetailsCMP from "../Components/HotelsPG/HotelDetailsCMP";
import { Outlet } from "react-router-dom";

// styles for main
const mainStyles = {
  marginTop: "70px",
  backgroundColor: "white",
  height: "92.6%",
  width: "99.9%",
  zIndex: "500",
  overflow: "hidden",
  position: "relative",
};

// context creation
export const HotelsPGContext = createContext();

// Initial State
const initialState = {
  mapPosition: [40, 0],
};
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "updateLatLng":
      return { ...state, mapPosition: action.payload };

    default:
      throw new Error("Unknown action");
  }
}

export default function AllHotelsPG() {
  const [{ mapPosition }, dispatch] = useReducer(reducer, initialState);

  return (
    <HotelsPGContext.Provider value={{ dispatch, mapPosition }}>
      <main style={mainStyles}>
        <SearchHotelDisplayCMP />
        <MapCMP />
        <Outlet />
      </main>
    </HotelsPGContext.Provider>
  );
}
