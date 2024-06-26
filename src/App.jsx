import HeaderCMP from "./Components/Header/HeaderCMP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AllHotelsPG from "./Pages/AllHotelsPG";
import AboutPG from "./Pages/AboutPG";
import SouvenirsPG from "./Pages/SouvenirsPG";
import PageNotFoundPG from "./Pages/PageNotFoundPG";
import HomePG from "./Pages/HomePG";
// import HotelsDisplayCMP from "./Components/HotelsPG/HotelsDisplayCMP";
// import HotelDetailsCMP from "./Components/HotelsPG/HotelDetailsCMP";
import HotelsPG2 from "./Pages/HotelsPG2";
import HotelDisplayCMP from "./Components/HotelsPG2/HotelDisplayCMP";
import HotelDetailsCMP from "./Components/HotelsPG2/HotelDetailsCMP";
import BookingWindowCMP from "./Components/HotelsPG2/BookingWindowCMP";
import ValidUserCMP from "./Components/HotelsPG2/ValidUserCMP";
import NotValidUserCMP from "./Components/HotelsPG2/NotValidUserCMP";

function App() {
  return (
    <BrowserRouter>
      <div className="divAllContent">
        <HeaderCMP />

        <Routes>
          <Route path="/" element={<HomePG />} />
          <Route path="hotels" element={<HotelsPG2 />}>
            <Route path=":cityName" element={<HotelDisplayCMP />}>
              <Route path=":hotelName" element={<HotelDetailsCMP />} />
              <Route path="bookingWindow" element={<BookingWindowCMP />} />
              <Route path="validUser" element={<ValidUserCMP />} />
              <Route path="notValidUser" element={<NotValidUserCMP />} />
            </Route>
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
