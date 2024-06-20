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

export default async function getHotel(city) {
  const iataCode = getIataCode(city);
  const allHotels = await getHotels(iataCode);
  return allHotels;
}
