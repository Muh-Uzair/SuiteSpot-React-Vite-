import { useSelector } from "react-redux";
import styles from "./HotelSearchDisplayCMP.module.css";
import PropTypes from "prop-types";

DivButtons.propTypes = {
  pageNum: PropTypes.number.isRequired,
  setPageNum: PropTypes.func.isRequired,
};

export function DivButtons({ pageNum, setPageNum }) {
  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  return (
    <div className={styles.divButtons}>
      <button
        style={pageNum === 1 ? { opacity: "0", pointerEvents: "none" } : {}}
        onClick={() => setPageNum((pageNum) => pageNum - 1)}
      >
        <img src="/assets/HomepagePG/chevron-left.png" />
        <span>{pageNum - 1}</span>
      </button>
      <button
        style={
          displayArr?.length < 10 ? { opacity: "0", pointerEvents: "none" } : {}
        }
        onClick={() => setPageNum((pageNum) => pageNum + 1)}
      >
        <span>{pageNum + 1}</span>
        <img src="/assets/HomepagePG/chevron-right.png" />
      </button>
    </div>
  );
}
