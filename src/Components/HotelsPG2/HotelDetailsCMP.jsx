import styles from "./HotelDetailsCMP.module.css";
import PropTypes from "prop-types";
import { getHotelByID } from "../../../amadeusService";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import MessageCMP from "../general/MessageCMP";
import { HotelsPGContext } from "../../Pages/HotelsPG2";

HotelDetailsCMP.propTypes = {
  hotelId: PropTypes.string,
};

let hotelDetailsObj = {};
export default function HotelDetailsCMP() {
  const [cmpState, setCmpState] = useState("initial");
  const { hotelId } = useSelector((state) => state.reduxHotelsPG2State);
  const { countryName } = useContext(HotelsPGContext);
  console.log(countryName);

  async function getHotelDetails() {
    try {
      setCmpState("isLoading");
      [hotelDetailsObj] = await getHotelByID(hotelId);
      console.log(hotelDetailsObj);
    } catch (error) {
      setCmpState("error");
    } finally {
      setCmpState("detailsArrived");
    }
  }

  useEffect(() => {
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
                <span>{countryName}Hello</span>
              </div>
              <div className={styles.divCity}>
                <img src="/assets/HotelsPG/city.png" />
                <span>1000$/room</span>
              </div>
              <div className={styles.divPrice}>
                <img src="/assets/HotelsPG/price.png" />
                <span>1000$/room</span>
              </div>
            </div>
            <button className={styles.buttonBookNow}>Book Now</button>
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
