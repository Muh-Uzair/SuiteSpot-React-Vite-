import { Link } from "react-router-dom";
import styles from "./HomePGfooter.module.css";

export default function HomePGfooter() {
  return (
    <div className={styles.divMain}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hotels">Hotels</Link>
        </li>
        <li>
          <Link to="/souvenirs">Souvenirs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/hotels">Rooms</Link>
        </li>
        <li>
          <Link to="/hotels">Tours</Link>
        </li>
      </ul>

      <div className={styles.divGitHubLinkedIN}>
        <div>
          <ul>
            <li>
              <a href="https://github.com/Muh-Uzair" target="blank">
                GitHub@Muh-Uzair
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-uzair-8ab357255/"
                target="blank"
              >
                LinkedIn@Muhammad Uzair
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.divMetaOthers}>
          <img src="../../.././assets/HomepagePG/Meta.png" />
          <img src="../../.././assets/HomepagePG/insta.png" />
          <img src="../../.././assets/HomepagePG/www.png" />
          <img src="../../.././assets/HomepagePG/X.png" />
        </div>
      </div>

      <div className={styles.textAllRights}>
        All rights reserved, SuiteSpot<sup>®</sup>.
      </div>
    </div>
  );
}
