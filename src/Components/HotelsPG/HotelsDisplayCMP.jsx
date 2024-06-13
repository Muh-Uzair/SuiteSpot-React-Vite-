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

  console.log(hotelsArr);
  if (isLoading) return null;
  return (
    <div className={styles.divMain}>
      <section className={styles.sectionHotelsDisplay}>
        <ul>
          {arrForDisplay.map((val, i) => (
            <li key={i}>{val.name}</li>
          ))}
        </ul>
      </section>
      <section className={styles.sectionButtons}>
        <button
          style={currPage === 1 ? { opacity: "0" } : {}}
          onClick={() => setCurrPage((currPage) => currPage - 1)}
        >
          Page {currPage - 1}
        </button>
        <button
          style={arrForDisplay.length < 10 ? { opacity: "0" } : {}}
          onClick={() => setCurrPage((currPage) => currPage + 1)}
        >
          Page {currPage + 1}
        </button>
      </section>
    </div>
  );
}
