import { useSelector } from "react-redux";
import styles from "./HotelsDisplayCMP.module.css";
import { useState, useEffect } from "react";

export default function HotelsDisplayCMP() {
  const { isLoading } = useSelector((state) => state.loadingState);
  const { hotelsArr } = useSelector((state) => state.hotelState);
  const [currPage, setCurrPage] = useState(1);
  const [arrForDisplay, setArrForDisplay] = useState([]);

  useEffect(() => {
    let newArr = [];
    function prepareArr() {
      for (let i = currPage * 10 - 10; i < currPage * 10; i++) {
        if (hotelsArr[i]) {
          newArr.push(hotelsArr[i]);
        }
      }
      setArrForDisplay(newArr);
    }
    if (currPage >= 1) prepareArr();
  }, [currPage]);

  // console.log(hotelsArr);
  if (isLoading) return null;
  return (
    <div className={styles.divMain}>
      <section className={styles.sectionHotelsDisplay}>
        <ul>
          {arrForDisplay.map((val, i) => (
            <li key={i}>
              <div className={styles.divImg}></div>
              <div className={styles.divHotelName}>
                <span className={styles.textHotelName}>{val.name}</span>
                <span className={styles.textHotel}>Hotel</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.sectionButtons}>
        <button
          style={currPage === 1 ? { opacity: "0", pointerEvents: "none" } : {}}
          onClick={() => setCurrPage((currPage) => currPage - 1)}
        >
          Page <strong>{currPage - 1}</strong>
        </button>
        <button
          style={
            arrForDisplay.length < 10
              ? { opacity: "0", pointerEvents: "none" }
              : {}
          }
          onClick={() => setCurrPage((currPage) => currPage + 1)}
        >
          Page <strong>{currPage + 1}</strong>
        </button>
      </section>
    </div>
  );
}
