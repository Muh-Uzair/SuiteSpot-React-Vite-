import PropTypes from "prop-types";
import styles from "./HotelSearchDisplayCMP.module.css";

DivCitySearchCMP.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  setCityName: PropTypes.func.isRequired,
};

export default function DivCitySearchCMP({ handleFormSubmit, setCityName }) {
  return (
    <div className={styles.divCitySearch}>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="Enter city of stay"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">
          <img src="/assets/HotelsPG/search.png" />
        </button>
      </form>
    </div>
  );
}
