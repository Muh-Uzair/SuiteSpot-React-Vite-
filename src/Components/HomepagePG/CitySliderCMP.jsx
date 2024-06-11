import { useState } from "react";
import styles from "./CitySliderCMP.module.css";

const allCities = [
  {
    cityName: "Mecca",
    iataCode: "MED",
    img: "../../../assets/HomepagePG/MeccaTower.jpg",
  },
  {
    cityName: "New York",
    iataCode: "NYC",
    img: "../../../assets/HomepagePG/NewYork.jpg",
  },
  {
    cityName: "London",
    iataCode: "LCY",
    img: "../../../assets/HomepagePG/London.jpg",
  },
  {
    cityName: "Lisbon",
    iataCode: "LIS",
    img: "../../../assets/HomepagePG/Lisbon.jpg",
  },
  {
    cityName: "Paris",
    iataCode: "CDG",
    img: "../../../assets/HomepagePG/Paris.jpg",
  },
  {
    cityName: "Munich",
    iataCode: "MUC",
    img: "../../../assets/HomepagePG/Munich.jpg",
  },
  {
    cityName: "Chicago",
    iataCode: "ORD",
    img: "../../../assets/HomepagePG/Chicago.jpg",
  },
  {
    cityName: "Toronto",
    iataCode: "YYZ",
    img: "../../../assets/HomepagePG/Toronto.jpg",
  },
  {
    cityName: "Dubai",
    iataCode: "DXB",
    img: "../../../assets/HomepagePG/Dubai.jpg",
  },
  {
    cityName: "Doha",
    iataCode: "DOH",
    img: "../../../assets/HomepagePG/Doha.jpg",
  },
];

export default function CitySliderCMP() {
  const [currSlide, setCurrSlide] = useState(0);
  const totalCities = allCities.length;

  function buttonLeftClick() {
    if (currSlide === 0) {
      setCurrSlide(totalCities - 3);
    } else {
      setCurrSlide((currSlide) => currSlide - 1);
    }
  }

  function buttonRightClick() {
    if (currSlide === totalCities - 3) {
      setCurrSlide(0);
    } else {
      setCurrSlide((currSlide) => currSlide + 1);
    }
  }

  return (
    <div className={styles.divMain}>
      <div className={styles.divButtonLeft}>
        <button className={styles.buttonLeft} onClick={() => buttonLeftClick()}>
          <img src="../../../assets/HomepagePG/chevron-left.png" />
        </button>
      </div>
      <div>
        <section className={styles.sectionAllCities}>
          {allCities.map((val, i) => (
            <div
              className={styles.divCitySlide}
              key={i}
              style={{ transform: `translateX(${100 * (i - currSlide)}%)` }}
            >
              <main className={styles.mainCityBox}>
                <section className={styles.cityImg}>
                  <img src={val.img} />
                </section>
                <section className={styles.sectionCityNameButton}>
                  <span>{val.cityName}</span>
                  <button>View Hotels</button>
                </section>
              </main>
            </div>
          ))}
        </section>
      </div>
      <div className={styles.divButtonRight}>
        <button
          className={styles.buttonRight}
          onClick={() => buttonRightClick()}
        >
          <img src="../../../assets/HomepagePG/chevron-right.png" />
        </button>
      </div>
    </div>
  );
}
