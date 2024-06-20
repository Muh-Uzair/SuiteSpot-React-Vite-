import { useContext, useState } from "react";
import styles from "./HotelSearchDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/HotelsPG2";

export default function HotelSearchDisplayCMP() {
  const [cityName, steCityName] = useState("");
  const { dispatch } = useContext(HotelsPGContext);

  async function getHotelList() {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
    );
    const data = await res.json();

    dispatch({
      type: "mapPositionChanged",
      payload: [data[0].lat, data[0].lon],
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    getHotelList();
  }

  return (
    <div className={styles.divMainBox}>
      <div className={styles.divCitySearch}>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="Enter city of stay"
            onChange={(e) => steCityName(e.target.value)}
          />
          <button type="submit">
            <img src="assets/HotelsPG/search.png" />
          </button>
        </form>
      </div>
      <div className={styles.divHotelList}>hotel list</div>
    </div>
  );
}
