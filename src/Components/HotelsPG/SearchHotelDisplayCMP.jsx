import { useContext } from "react";
import styles from "./SearchHotelDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/AllHotelsPG";

export default function SearchHotelDisplayCMP() {
  const { cityName, dispatch } = useContext(HotelsPGContext);

  async function getCityLatLng() {
    try {
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
