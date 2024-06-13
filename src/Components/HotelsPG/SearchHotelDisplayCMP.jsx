import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchHotelDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/AllHotelsPG";
import {
  setIsLoadingTrue,
  setIsLoadingFalse,
} from "../../Redux/Slices/loadingSlice";

export default function SearchHotelDisplayCMP() {
  const { cityName, dispatch } = useContext(HotelsPGContext);
  const reduxDispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingState);
  console.log(loadingState);

  async function getCityLatLng() {
    try {
      reduxDispatch(setIsLoadingTrue());
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
      );

      const data = await res.json();
      dispatch({
        type: "updateLatLng",
        payload: [Number(data[0].lat), Number(data[0].lon)],
      });
    } catch (error) {
      console.log(error);
    } finally {
      reduxDispatch(setIsLoadingFalse());
    }
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (cityName) getCityLatLng();
  }

  return (
    <div className={styles.divSearchCityOther}>
      <form
        className={styles.formCitySearch}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          value={cityName}
          onChange={(e) =>
            dispatch({ type: "cityNameChanged", payload: e.target.value })
          }
          type="text"
          placeholder="Enter city name"
        />
        <button type="submit">
          <img src="../.././assets/HotelsPG/search.png" />
        </button>
      </form>

      <div className={styles.divAllHotels}></div>
    </div>
  );
}
