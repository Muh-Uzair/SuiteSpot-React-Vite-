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
  appStatus: "initial",
  hotelsArr: [],
  countryName: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "cityNotFound":
      return { ...state, appStatus: "cityNotFound" };
    case "backToInitial":
      return { ...state, appStatus: "initial" };
    case "hotelsFound":
      return {
        ...state,
        appStatus: "hotelsFound",
        hotelsArr: action.payload.allHotels,
        mapPosition: action.payload.mapPosition,
        countryName: action.payload.countryName,
      };

    default:
      throw new Error("Unknown Action Performed");
  }
}

// make a context
export const HotelsPGContext = createContext();

export default function HotelsPG2() {
  const [{ mapPosition, appStatus, hotelsArr }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <HotelsPGContext.Provider
      value={{
        dispatch,
        mapPosition,
        appStatus,
        hotelsArr,
        countryName,
      }}
    >
      <div style={styles}>
        <MapCMP />
        <HotelSearchDisplayCMP />
      </div>
    </HotelsPGContext.Provider>
  );
}
