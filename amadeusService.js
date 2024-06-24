import axios from "axios";

const AMADEUS_API_KEY = "PWXqzKPnAyqsswTLlL0M5RnZLBnA0cPR";
const AMADEUS_API_SECRET = "GdaXETtn3LUdWmOf";
const AMADEUS_AUTH_URL =
  "https://test.api.amadeus.com/v1/security/oauth2/token";

let accessToken = null;

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      AMADEUS_AUTH_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: AMADEUS_API_KEY,
        client_secret: AMADEUS_API_SECRET,
      })
    );
    accessToken = response.data.access_token;
    // console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

export const getHotels = async (cityCode) => {
  const AMADEUS_HOTELS_URL = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}&radius=10&radiusUnit=KM&hotelSource=ALL`;

  if (!accessToken) {
    await getAccessToken();
  }
  try {
    const response = await axios.get(AMADEUS_HOTELS_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};

export const getHotelByID = async (hotelID) => {
  const AMADEUS_HOTELS_URL = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels?hotelIds=${hotelID}`;

  if (!accessToken) {
    await getAccessToken();
  }
  try {
    const response = await axios.get(AMADEUS_HOTELS_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    // console.error("Error fetching hotels:", error);
  }
};
