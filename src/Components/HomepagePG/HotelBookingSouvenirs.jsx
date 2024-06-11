import styles from "../HomepagePG/HotelBookingSouvenirs.module.css";

export default function HotelBookingSouvenirs() {
  return (
    <div className={styles.divMain}>
      <section className={styles.sectionSouvenirs}>
        <div className={`${styles.divSouvenir} ${styles.divSouvenir1}`}>
          <img src="../../../assets/HomepagePG/MonaLisa.jpg" />
          <button>Buy</button>
        </div>
        <div className={`${styles.divSouvenir} ${styles.divSouvenir2}`}></div>
        <div className={`${styles.divSouvenir} ${styles.divSouvenir3}`}></div>
        <div className={`${styles.divSouvenir} ${styles.divSouvenir4}`}></div>
      </section>
      <section className={styles.sectionHotelBooking}>
        <img src="../../../assets/HomepagePG/PalmHotel2.jpg" />
        <button>Book A Hotel</button>
      </section>
    </div>
  );
}
