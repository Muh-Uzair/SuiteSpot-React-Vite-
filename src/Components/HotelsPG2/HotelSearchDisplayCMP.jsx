import { useContext, useEffect, useState } from "react";
import styles from "./HotelSearchDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/HotelsPG2";
import MessageCMP from "../general/MessageCMP";
import getHotel from "./essential";
import DivCitySearchCMP from "./DivCitySearchCMP";
import { DivButtons } from "./DivButtons";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayArr } from "../../Redux/Slices/HotelsPG2";

export default function HotelSearchDisplayCMP() {
  const [cityName, setCityName] = useState("");
  const { dispatch, appStatus, hotelsArr } = useContext(HotelsPGContext);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();
  const { displayArr } = useSelector((state) => state.reduxHotelsPG2State);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    let newArr = [];
    function makeHotelsChunk() {
      for (let i = pageNum * 10 - 10; i < pageNum * 10; i++) {
        if (hotelsArr[i]) {
          newArr.push(hotelsArr[i]);
        }
      }

      reduxDispatch(setDisplayArr(newArr));
      navigate(cityName);
    }
    if (hotelsArr.length > 0) makeHotelsChunk();
  }, [hotelsArr, pageNum]);

  async function getHotelList() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
      );

      const data = await res.json();
      if (data.length === 0) {
        dispatch({ type: "cityNotFound" });
      } else if (data.length > 0) {
        const allHotels = await getHotel(cityName);
        if (allHotels.length > 0) {
          setIsLoading(false);
          dispatch({
            type: "hotelsFound",
            payload: {
              allHotels,
              mapPosition: [Number(data[0].lat), Number(data[0].lon)],
            },
          });
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch({ type: "backToInitial" });
    getHotelList();
    setPageNum(1);
  }

  return (
    <div className={styles.divMainBox}>
      <DivCitySearchCMP
        handleFormSubmit={handleFormSubmit}
        setCityName={setCityName}
      />

      <div className={styles.divHotelListAndButtons}>
        <div className={styles.divHotelList}>
          {isLoading && (
            <img
              className={styles.gifLoading}
              src="/assets/HotelsPG/loading.gif"
            />
          )}
          {appStatus === "hotelsFound" && <Outlet />}
          {appStatus === "cityNotFound" && (
            <MessageCMP message={"City not found ❌"} />
          )}
          {/* <Outlet /> */}
        </div>

        <DivButtons
          pageNum={pageNum}
          setPageNum={setPageNum}
          displayHotels={displayArr}
        />
      </div>
    </div>
  );
}
