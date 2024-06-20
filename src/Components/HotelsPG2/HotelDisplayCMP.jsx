import PropTypes from "prop-types";
import { useSelector } from "react-redux";

HotelDisplayCMP.propTypes = {
  displayHotels: PropTypes.array,
};

export default function HotelDisplayCMP() {
  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  console.log(`here`);
  console.log(displayArr);
  return (
    <ul>
      {displayArr?.map((val, i) => (
        <li key={i}>{val.name}</li>
      ))}
    </ul>
  );
}
