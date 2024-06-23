import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HotelDisplayCMP.module.css";
import { Link, Outlet } from "react-router-dom";
import { setHotelID } from "../../Redux/Slices/HotelsPG2";

HotelDisplayCMP.propTypes = {
  displayHotels: PropTypes.array,
};

export default function HotelDisplayCMP() {
  const reduxDispatch = useDispatch();

  function hotelClicked(val) {
    reduxDispatch(setHotelID(val.hotelId));
  }

  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  return (
    <div className={styles.divHotelListAndDetails}>
      <div className={styles.divHotelList}>
        <ul className={styles.hotelListUl}>
          {displayArr?.map((val, i) => (
            <li key={i} onClick={() => hotelClicked(val)}>
              <Link to={`${val.name.replace(/\s+/g, "-")}`}>
                <div className={styles.divPicture}>
                  <img src="/assets/HomepagePG/bed-1.png" />
                </div>
                <div className={styles.divHotelName}>
                  <span className={styles.textHotelName}>{val.name}</span>
                  <span className={styles.textHotel}>Hotel</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
