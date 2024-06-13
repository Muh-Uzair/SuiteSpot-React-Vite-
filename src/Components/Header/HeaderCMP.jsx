import { NavLink, Link } from "react-router-dom";
import headerStyles from "../Header/HeaderCMP.module.css";

export default function HeaderCMP() {
  return (
    <div className={headerStyles.divHeader}>
      <header className={headerStyles.header}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <img
              className={headerStyles.imgLogo}
              src="../.././assets/Header-assets/SuiteSpot-logo.png"
            />
          </Link>
        </div>
        <div className={headerStyles.divNavButtons}>
          <ul>
            <li>
              <span>
                <NavLink to="/">HOME</NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/hotels">HOTELS</NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/souvenirs">SOUVENIRS</NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/about">ABOUT</NavLink>
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
