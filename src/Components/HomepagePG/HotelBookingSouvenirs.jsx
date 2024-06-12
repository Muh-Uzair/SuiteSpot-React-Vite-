import styles from "../HomepagePG/HotelBookingSouvenirs.module.css";

export default function HotelBookingSouvenirs() {
  return (
    <main className={styles.mainBox}>
      <h1>Buy souvenirs and book hotels</h1>
      <div className={styles.divMain}>
        <section className={styles.sectionSouvenirs}>
          <div className={`${styles.divSouvenir} ${styles.divSouvenir1}`}>
            <img src="../../../assets/HomepagePG/guitar.jpg" />
            <button>Buy</button>
          </div>
          <div className={`${styles.divSouvenir} ${styles.divSouvenir2}`}>
            <img src="../../../assets/HomepagePG/carpet.jpg" />
            <button>Buy</button>
          </div>
          <div className={`${styles.divSouvenir} ${styles.divSouvenir3}`}>
            <img src="../../../assets/HomepagePG/painting.jpg" />
            <button>Buy</button>
          </div>
          <div className={`${styles.divSouvenir} ${styles.divSouvenir4}`}>
            <img src="../../../assets/HomepagePG/oldCamera.jpg" />
            <button>Buy</button>
          </div>
        </section>
        <section className={styles.sectionHotelBooking}>
          <img src="../../../assets/HomepagePG/PalmHotel2.jpg" />
          <button>Book A Hotel</button>
        </section>
      </div>
    </main>
  );
}
