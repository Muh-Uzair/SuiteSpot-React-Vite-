import styles from "./CitySliderCMP.module.css";

export default function CitySliderCMP() {
  return (
    <div className={styles.divMain}>
      <section className={styles.sectionButtonLeft}>
        <button>&larr;</button>
      </section>
      <section className={styles.sectionAllCities}></section>
      <section className={styles.sectionButtonRight}>
        <button>&rarr;</button>
      </section>
    </div>
  );
}
