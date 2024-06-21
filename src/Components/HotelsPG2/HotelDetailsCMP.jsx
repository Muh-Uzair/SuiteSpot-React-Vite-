import styles from "./HotelDetailsCMP.module.css";
import PropTypes from "prop-types";
import { getHotelByID } from "../../../amadeusService";
import { useState, useEffect } from "react";

HotelDetailsCMP.propTypes = {
  hotelId: PropTypes.string,
};

let hotelDetailsObj = {};

export default function HotelDetailsCMP({ hotelId }) {
  const [cmpState, setCmpState] = useState("initial");

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
