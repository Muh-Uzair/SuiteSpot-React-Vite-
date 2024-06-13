import { createContext, useReducer } from "react";
import SearchHotelDisplayCMP from "../Components/HotelsPG/SearchHotelDisplayCMP";
import MapCMP from "../Components/HotelsPG/MapCMP";

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
  cityName: "",
};
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "cityNameChanged":
      return { ...state, cityName: action.payload };

    case "updateLatLng":
      return { ...state, mapPosition: action.payload };

    default:
      throw new Error("Unknown action");
  }
}

export default function AllHotelsPG() {
  const [{ mapPosition, cityName }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <HotelsPGContext.Provider value={{ cityName, dispatch, mapPosition }}>
      <main style={mainStyles}>
        <SearchHotelDisplayCMP />
        <MapCMP />
      </main>
    </HotelsPGContext.Provider>
  );
}
