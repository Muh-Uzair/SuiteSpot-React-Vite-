import styles from "./HomePGinfoCMP.module.css";

export default function HomePGinfoCMP() {
  return (
    <div className={styles.divMain}>
      <section className={styles.sectionImg}>
        <img
          className={styles.imgHotelRoom1}
          src="../.././assets/HomepagePG/hotel-room-1.webp"
        />
      </section>
      <section className={styles.sectionText}>
        <span className={styles.textInfo}>
          With SuiteSpot<sup>®</sup> you can book rooms all over the globe at
          best prices. So don&apos;t hesitate and find your next sweet spot with
          SuiteSpot<sup>®</sup>.
        </span>
      </section>
    </div>
  );
}
