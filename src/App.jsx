import HeaderCMP from "./Components/Header/HeaderCMP";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HotelsPG from "./Pages/HotelsPG";
import AboutPG from "./Pages/AboutPG";
import SouvenirsPG from "./Pages/SouvenirsPG";
import PageNotFoundPG from "./Pages/PageNotFoundPG";
import HomePG from "./Pages/HomePG";

// header merged

function App() {
  return (
    <BrowserRouter>
      <div className="divAllContent">
        <HeaderCMP />

        <Routes>
          <Route path="/" element={<HomePG />} />
          <Route path="hotels" element={<HotelsPG />} />
          <Route path="souvenirs" element={<SouvenirsPG />} />
          <Route path="about" element={<AboutPG />} />
          <Route path="*" element={<PageNotFoundPG />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
