const cityInitialState = {
  cityName: "",
};
export default function cityReducer(state = cityInitialState, action) {
  switch (action.type) {
    case "changeCityName":
      return { ...state, cityName: action.payload };
    default:
      return state;
  }
}
export function changeCityName(r_cityName) {
  return { type: "changeCityName", payload: r_cityName };
}
