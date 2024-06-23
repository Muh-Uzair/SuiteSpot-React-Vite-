import styles from "./HotelDetailsCMP.module.css";
import PropTypes from "prop-types";
import { getHotelByID } from "../../../amadeusService";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import MessageCMP from "../general/MessageCMP";
import { HotelsPGContext } from "../../Pages/HotelsPG2";
import { Link, useParams } from "react-router-dom";

HotelDetailsCMP.propTypes = {
  hotelId: PropTypes.string,
};

let hotelDetailsObj = {};
export default function HotelDetailsCMP() {
  const [cmpState, setCmpState] = useState("initial");
  const { hotelId } = useSelector((state) => state.reduxHotelsPG2State);
  const { countryName } = useContext(HotelsPGContext);
  const { cityName } = useParams();
  const [rooms, setRooms] = useState(0);

  async function getHotelDetails() {
    try {
      setCmpState("isLoading");
      [hotelDetailsObj] = await getHotelByID(hotelId);
      // console.log(hotelDetailsObj);
    } catch (error) {
      setCmpState("error");
    } finally {
      setCmpState("detailsArrived");
    }
  }

  useEffect(() => {
    console.log(`run`);
    if (hotelId) {
      getHotelDetails();
    }
  }, [hotelId]);

  return (
    <div className={styles.hotelDetails}>
      {cmpState === "isLoading" && (
        <img className={styles.gifLoading} src="/assets/HotelsPG/loading.gif" />
      )}
      {cmpState === "error" && (
        <MessageCMP message={"Error in fetching details ❌"} />
      )}
      {cmpState === "detailsArrived" && (
        <div className={styles.divAllDetails}>
          <DivHotelPicName />
          <div className={styles.divAllBookingDetails}>
            <div className={styles.divCountryCityPrice}>
              <div className={styles.divCountry}>
                <img src="/assets/HotelsPG/country.png" />
                <span>{countryName}</span>
              </div>
              <div className={styles.divCity}>
                <img src="/assets/HotelsPG/city.png" />
                <span>{`${
                  cityName.charAt(0).toUpperCase() + cityName.slice(1)
                }`}</span>
              </div>
              <div className={styles.divPrice}>
                <img src="/assets/HotelsPG/price.png" />
                <span>
                  {`${
                    Math.round((Math.random() * (999 - 100 + 1) + 100) / 10) *
                    10
                  }€ / Room`}
                </span>
              </div>
            </div>
            <div className={styles.divCheckInOutRooms}>
              <div className={styles.divCheckIn}>
                <span>Check In </span>
                <input type="date" />
              </div>
              <div className={styles.divCheckOut}>
                <span>Check Out </span>
                <input type="date" />
              </div>
              <div className={styles.divPrice}>
                <span>Rooms : </span>
                <input
                  type="range"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  min="0"
                  max="5"
                  step="1"
                />
                <span>{rooms}</span>
              </div>
            </div>
            <div className={styles.divTotalPrice}>
              <span>Total Price : 2000€</span>
            </div>

            <Link to={`/hotels/${cityName}/bookingWindow`}>
              <button className={styles.buttonBookNow}>Book Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function DivHotelPicName() {
  return (
    <div className={styles.divHotelPicName}>
      <span>{hotelDetailsObj.name}</span>
      <img src="/assets/HomepagePG/hotel-room-1.webp" />
    </div>
  );
}
