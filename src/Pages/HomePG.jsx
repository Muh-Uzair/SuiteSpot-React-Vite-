import { useDispatch, useSelector } from "react-redux";
import CitySliderCMP from "../Components/HomepagePG/CitySliderCMP";
import HomePGfooter from "../Components/HomepagePG/HomePGfooter";
import HomePGinfoCMP from "../Components/HomepagePG/HomePGinfoCMP";
import HomepagePGheader from "../Components/HomepagePG/HomepagePGheader";
import HotelBookingSouvenirs from "../Components/HomepagePG/HotelBookingSouvenirs";
import { useEffect } from "react";
import { setCityEmpty } from "../Redux/Slices/citySlice";

export default function HomePG() {
  const reduxDispatch = useDispatch();
  const { cityName } = useSelector((state) => state.cityState);

  useEffect(() => {
    function makeCityEmpty() {
      reduxDispatch(setCityEmpty());
    }
    if (cityName !== "") makeCityEmpty();
  });
  return (
    <main
      style={{
        height: "2700px",
        position: "relative",
        marginTop: "70px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          alignItems: "center",
          width: "1000px ",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <HomepagePGheader />
        <HomePGinfoCMP />
        <CitySliderCMP />
        <HotelBookingSouvenirs />
      </div>
      <HomePGfooter />
    </main>
  );
}
