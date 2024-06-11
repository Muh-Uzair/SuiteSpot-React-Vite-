import CitySliderCMP from "../Components/HomepagePG/CitySliderCMP";
import HomePGinfoCMP from "../Components/HomepagePG/HomePGinfoCMP";
import HomepagePGheader from "../Components/HomepagePG/HomepagePGheader";

export default function HomePG() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "100px",
        alignItems: "center",
        width: "1000px ",
        height: "2000px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <HomepagePGheader />
      <HomePGinfoCMP />
      <CitySliderCMP />
    </div>
  );
}
