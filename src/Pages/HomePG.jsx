import CitySliderCMP from "../Components/HomepagePG/CitySliderCMP";
import HomePGfooter from "../Components/HomepagePG/HomePGfooter";
import HomePGinfoCMP from "../Components/HomepagePG/HomePGinfoCMP";
import HomepagePGheader from "../Components/HomepagePG/HomepagePGheader";
import HotelBookingSouvenirs from "../Components/HomepagePG/HotelBookingSouvenirs";

export default function HomePG() {
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
