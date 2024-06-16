import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityEmpty } from "../Redux/Slices/citySlice";

const styles = {
  marginTop: "70px",
  backgroundColor: "white",
  height: "92.6%",
  width: "99.9%",
  zIndex: "500",
  overflow: "hidden",
  position: "relative",
};

export default function AboutPG() {
  const reduxDispatch = useDispatch();
  const { cityName } = useSelector((state) => state.cityState);
  useEffect(() => {
    function makeCityEmpty() {
      reduxDispatch(setCityEmpty());
    }
    if (cityName !== "") makeCityEmpty();
  });
  return <main style={styles}>About</main>;
}
