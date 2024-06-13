import HeaderCMP from "./Components/Header/HeaderCMP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllHotelsPG from "./Pages/AllHotelsPG";
import AboutPG from "./Pages/AboutPG";
import SouvenirsPG from "./Pages/SouvenirsPG";
import PageNotFoundPG from "./Pages/PageNotFoundPG";
import HomePG from "./Pages/HomePG";
// import { useSelector } from "react-redux";
import HotelsDisplayCMP from "./Components/HotelsPG/HotelsDisplayCMP";

function App() {
  // const { cityName } = useSelector((state) => state.cityState);

  return (
    <BrowserRouter>
      <div className="divAllContent">
        <HeaderCMP />

        <Routes>
          <Route path="/" element={<HomePG />} />
          <Route path="hotels" element={<AllHotelsPG />}>
            <Route path={`hotels/:cityName`} element={<HotelsDisplayCMP />} />
          </Route>
          <Route path="souvenirs" element={<SouvenirsPG />} />
          <Route path="about" element={<AboutPG />} />
          <Route path="*" element={<PageNotFoundPG />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
