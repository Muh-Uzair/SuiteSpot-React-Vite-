import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./HotelDisplayCMP.module.css";
import HotelDetailsCMP from "./HotelDetailsCMP";
import { useState } from "react";

HotelDisplayCMP.propTypes = {
  displayHotels: PropTypes.array,
};

export default function HotelDisplayCMP() {
  const [flag, setFlag] = useState(false);
  const [hotelId, setHotelId] = useState({});

  function hotelClicked(id) {
    setFlag(true);
    setHotelId(id);
  }

  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  return (
    <div className={styles.divHotelListAndDetails}>
      <div className={styles.divHotelList}>
        <ul className={styles.hotelListUl}>
          {displayArr?.map((val, i) => (
            <li key={i} onClick={() => hotelClicked(val.hotelId)}>
              <div className={styles.divPicture}>
                <img src="/assets/HomepagePG/bed-1.png" />
              </div>
              <div className={styles.divHotelName}>
                <span className={styles.textHotelName}>{val.name}</span>
                <span className={styles.textHotel}>Hotel</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {flag && <HotelDetailsCMP hotelId={hotelId} />}
    </div>
  );
}
