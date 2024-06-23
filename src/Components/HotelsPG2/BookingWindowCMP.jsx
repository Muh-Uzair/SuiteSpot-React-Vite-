import { useNavigate } from "react-router-dom";
import styles from "../HotelsPG2/BookingWindowCMP.module.css";

export default function BookingWindowCMP() {
  const navigate = useNavigate();
  return (
    <div className={styles.divMainBox}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        <img src="/assets/HotelsPG/chevron-left.png" />
        Back
      </button>

      <div className={styles.divCreditCardPin}>
        <input type="number" placeholder="Enter credit card number" />
        <input type="number" placeholder="Enter your pin" />
      </div>
    </div>
  );
}
