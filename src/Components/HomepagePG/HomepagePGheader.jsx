import styles from "./HomepagePGheader.module.css";

export default function HomepagePGheader() {
  return (
    <div className={styles.divHeader}>
      <div className={styles.divIntroBar}>
        <span className={styles.textFindYourself}>
          Find yourself your next sweet spot with SuiteSpot<sup>®</sup>
        </span>
      </div>

      <div className={styles.divBookAnyWhere}>
        <section className={styles.sectionImg}>
          <img
            className={styles.imgBed}
            src="../.././assets/HomepagePG/bed-1.png"
          />
        </section>
        <section className={styles.sectionText}>
          <span className={`${styles.textInfo} ${styles.textBed}`}>
            Book a hotel any where around the globe
          </span>
        </section>
      </div>
      <div className={styles.divPayBackGuarantee}>
        <section className={styles.sectionImg}>
          <img
            className={styles.imgCalender}
            src="../.././assets/HomepagePG/calender-1.png"
          />
        </section>
        <section className={styles.sectionText}>
          <span className={`${styles.textInfo} ${styles.textCalender}`}>
            Free cancelation any time, and money back guarantee
          </span>
        </section>
      </div>
    </div>
  );
}
