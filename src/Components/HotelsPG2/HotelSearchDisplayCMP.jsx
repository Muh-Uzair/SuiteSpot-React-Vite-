import { useContext, useState } from "react";
import styles from "./HotelSearchDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/HotelsPG2";

export default function HotelSearchDisplayCMP() {
  const [cityName, setCityName] = useState("");
  const { dispatch, appStatus } = useContext(HotelsPGContext);
  const [isLoading, setIsLoading] = useState(false);

  async function getHotelList() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
      );

      const data = await res.json();
      if (data.length === 0) {
        dispatch({ type: "cityNotFound" });
      } else if (data.length > 0) {
        dispatch({
          type: "mapPositionChanged",
          payload: [Number(data[0].lat), Number(data[0].lon)],
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "backToInitial",
    });
    getHotelList();
  }

  return (
    <div className={styles.divMainBox}>
      <div className={styles.divCitySearch}>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="Enter city of stay"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button type="submit">
            <img src="assets/HotelsPG/search.png" />
          </button>
        </form>
      </div>
      <div className={styles.divHotelList}>
        {isLoading && (
          <img
            className={styles.gifLoading}
            src="assets/HotelsPG/loading.gif"
          />
        )}
        {appStatus === "cityFound" && <p>city found</p>}
        {appStatus === "cityNotFound" && <p>City not found</p>}
      </div>
    </div>
  );
}
