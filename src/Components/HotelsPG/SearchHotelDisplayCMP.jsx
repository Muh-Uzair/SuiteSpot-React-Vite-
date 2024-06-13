import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchHotelDisplayCMP.module.css";
import { HotelsPGContext } from "../../Pages/AllHotelsPG";
import {
  setIsLoadingTrue,
  setIsLoadingFalse,
} from "../../Redux/Slices/loadingSlice";
import { Outlet } from "react-router-dom";
import { changeCityName } from "../../Redux/Slices/citySlice";
import { getHotels } from "../../../amadeusService";

const allCities = [
  {
    cityName: "mecca",
    iataCode: "MED",
  },
  {
    cityName: "new York",
    iataCode: "NYC",
  },
  {
    cityName: "london",
    iataCode: "LCY",
  },
  {
    cityName: "lisbon",
    iataCode: "LIS",
  },
  {
    cityName: "paris",
    iataCode: "CDG",
  },
  {
    cityName: "munich",
    iataCode: "MUC",
  },
  {
    cityName: "chicago",
    iataCode: "ORD",
  },
  {
    cityName: "toronto",
    iataCode: "YYZ",
  },
  {
    cityName: "dubai",
    iataCode: "DXB",
  },
  {
    cityName: "doha",
    iataCode: "DOH",
  },
];

function getIataCode(city) {
  let iataCode = "";
  allCities.forEach((val) => {
    if (val.cityName === city) {
      iataCode = val.iataCode;
    }
  });

  return iataCode;
}

async function getHotel(city) {
  const iataCode = getIataCode(city);
  const allHotels = await getHotels(iataCode);
  return allHotels;
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export default function SearchHotelDisplayCMP() {
  const { dispatch, mapPosition } = useContext(HotelsPGContext);
  const reduxDispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingState);
  const [noCityFound, setNoCityFound] = useState(false);
  const [hotelsFound, setHotelsFound] = useState(false);
  // const navigate = useNavigate();
  const [localCityName, setLocalCityName] = useState("");

  //__________________________________________________________
  async function getCityLatLng() {
    try {
      // set is loading to true
      reduxDispatch(setIsLoadingTrue());
      // fetch request

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${localCityName}&format=json`
      );
      const data = await res.json();

      // ching for validity of city
      if (data.length > 0) {
        dispatch({
          type: "updateLatLng",
          payload: [Number(data[0].lat), Number(data[0].lon)],
        });
      } else if (data.length === 0) {
        setNoCityFound(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      reduxDispatch(setIsLoadingFalse());
    }
  }

  useEffect(() => {
    async function getAllHotels() {
      const allHotels = await getHotel(localCityName.toLowerCase());
      console.log(allHotels);
      if (allHotels) {
        setHotelsFound(true);
        // navigate(localCityName);
      } else if (!allHotels) {
        setHotelsFound(false);
      }
    }
    if (localCityName) getAllHotels();
  }, [mapPosition]);

  //__________________________________________________________
  function handleFormSubmit(e) {
    e.preventDefault();
    setNoCityFound(false);
    reduxDispatch(changeCityName(localCityName));

    if (localCityName) getCityLatLng();
  }
  //------------------------------------------------------------------------------
  return (
    <div className={styles.divSearchCityOther}>
      <form
        className={styles.formCitySearch}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          value={localCityName}
          onChange={(e) => setLocalCityName(e.target.value)}
          type="text"
          placeholder="Enter city name"
        />
        <button type="submit">
          <img
            src="..
          /.././assets/HotelsPG/search.png"
          />
        </button>
      </form>

      <div
        className={styles.divAllHotels}
        style={
          isLoading || noCityFound
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {}
        }
      >
        {isLoading && (
          <img
            className={styles.gifLoading}
            src="../../.././assets/HotelsPG/loading.gif"
          />
        )}
        {noCityFound && (
          <span className={styles.noCityFound}>No city found</span>
        )}
        {hotelsFound && (
          <div>
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
  //------------------------------------------------------------------------------
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
