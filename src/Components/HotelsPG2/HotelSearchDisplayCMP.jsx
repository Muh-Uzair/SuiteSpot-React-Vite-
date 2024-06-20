import { useContext, useEffect, useState } from "react";
import styles from "./HotelSearchDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/HotelsPG2";
import MessageCMP from "../general/MessageCMP";
import getHotel from "./essential";

export default function HotelSearchDisplayCMP() {
  const [cityName, setCityName] = useState("");
  const { dispatch, appStatus, hotelsArr } = useContext(HotelsPGContext);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [displayHotels, setDisplayHotels] = useState([]);

  useEffect(() => {
    let newArr = [];
    function callback() {
      for (let i = pageNum * 10 - 10; i < pageNum * 10; i++) {
        if (hotelsArr[i]) {
          newArr.push(hotelsArr[i]);
        }
      }
      setDisplayHotels(newArr);
    }
    if (hotelsArr.length > 0) callback();
  }, [hotelsArr, pageNum]);

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
        const allHotels = await getHotel(cityName);
        console.log(allHotels);
        if (allHotels.length > 0) {
          setIsLoading(false);
          dispatch({
            type: "hotelsFound",
            payload: {
              allHotels,
              mapPosition: [Number(data[0].lat), Number(data[0].lon)],
            },
          });
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
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
            onChange={(e) => setCityName(e.target.value)}
          />
          <button type="submit">
            <img src="assets/HotelsPG/search.png" />
          </button>
        </form>
      </div>

      <div className={styles.divHotelListAndButtons}>
        <div className={styles.divHotelList}>
          {isLoading && (
            <img
              className={styles.gifLoading}
              src="assets/HotelsPG/loading.gif"
            />
          )}
          {displayHotels && (
            <ul>
              {displayHotels.map((val, i) => (
                <li key={i}>{val.name}</li>
              ))}
            </ul>
          )}
          {appStatus === "cityNotFound" && (
            <MessageCMP message={"City not found ❌"} />
          )}
        </div>

        <div className={styles.divButtons}>
          <button
            style={pageNum === 1 ? { opacity: "0", pointerEvents: "none" } : {}}
            onClick={() => setPageNum((pageNum) => pageNum - 1)}
          >
            <img src="assets/HomepagePG/chevron-left.png" />
            <span>{pageNum - 1}</span>
          </button>
          <button
            style={
              displayHotels.length < 10
                ? { opacity: "0", pointerEvents: "none" }
                : {}
            }
            onClick={() => setPageNum((pageNum) => pageNum + 1)}
          >
            <span>{pageNum + 1}</span>
            <img src="assets/HomepagePG/chevron-right.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
