import headerStyles from "../Header/HeaderCMP.module.css";

export default function HeaderCMP() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <img
          className={headerStyles.imgLogo}
          src="../.././assets/Header-assets/SuiteSpot-logo.png"
        />
      </div>
      <div className={headerStyles.divNavButtons}>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Hotels</span>
          </li>
          <li>
            <span>Souvenirs</span>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
