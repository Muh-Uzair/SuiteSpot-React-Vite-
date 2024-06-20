import { createContext, useReducer } from "react";
import MapCMP from "../Components/HotelsPG2/MapCMP";
import HotelSearchDisplayCMP from "../Components/HotelsPG2/HotelSearchDisplayCMP";

// styles for divMain
const styles = {
  marginTop: "70px",
  backgroundColor: "white",
  height: "92.6%",
  width: "99.9%",
  zIndex: "500",
  overflow: "hidden",
  position: "relative",
};

// making a reducer for managing page level state with context
const initialState = {
  mapPosition: [40, 0],
};
function reducer(state, action) {
  switch (action.type) {
    case "mapPositionChanged":
      return { ...state, mapPosition: action.payload };

    default:
      throw new Error("Unknown Action Performed");
  }
}

// make a context
const HotelsPGContext = createContext();

export default function HotelsPG2() {
  const [{ mapPosition }, dispatch] = useReducer(reducer, initialState);

  return (
    <HotelsPGContext.Provider
      value={{
        dispatch,
        mapPosition,
      }}
    >
      <div style={styles}>
        <MapCMP />
        <HotelSearchDisplayCMP />
      </div>
    </HotelsPGContext.Provider>
  );
}
