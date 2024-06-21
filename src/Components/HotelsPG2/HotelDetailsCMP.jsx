import styles from "./HotelDetailsCMP.module.css";
import PropTypes from "prop-types";
import { getHotelByID } from "../../../amadeusService";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

HotelDetailsCMP.propTypes = {
  hotelId: PropTypes.string,
};

export default function HotelDetailsCMP() {
  const [cmpState, setCmpState] = useState("initial");
  const { hotelId } = useSelector((state) => state.reduxHotelsPG2State);
  let hotelDetailsObj = {};
  console.log(hotelId);

  async function getHotelDetails() {
    try {
      setCmpState("isLoading");
      [hotelDetailsObj] = await getHotelByID(hotelId);
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
      {cmpState === "error" && <span>Error in fetching details ❌</span>}
      {cmpState === "detailsArrived" && <span>{hotelDetailsObj.name}</span>}
    </div>
  );
}
