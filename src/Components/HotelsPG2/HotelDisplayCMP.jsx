import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./HotelDisplayCMP.module.css";

HotelDisplayCMP.propTypes = {
  displayHotels: PropTypes.array,
};

export default function HotelDisplayCMP() {
  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  return (
    <ul className={styles.hotelListUl}>
      {displayArr?.map((val, i) => (
        <li key={i}>
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
  );
}
