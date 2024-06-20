import { useState } from "react";
import styles from "./HotelSearchDisplayCMP.module.css";

export default function HotelSearchDisplayCMP() {
  return (
    <div className={styles.divMainBox}>
      <DivSearchHotelList />
      <DivHotelDetails />
    </div>
  );
}

function DivSearchHotelList() {
  const [cityName, steCityName] = useState("");

  async function getHotelList() {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
    );
    const data = await res.json();

    console.log(data);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    getHotelList();

    console.log(cityName);
  }

  return (
    <div className={styles.divSearchList}>
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

function DivHotelDetails() {
  return <div className={styles.divHotelDetails}></div>;
}
