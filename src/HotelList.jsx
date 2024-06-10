import { useState } from "react";
import { getHotels } from "./amadeusService";

const HotelList = () => {
  const [cityCode, setCityCode] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const hotelData = await getHotels(cityCode);
      console.log(hotelData);
      setHotels(hotelData);
    } catch (error) {
      setError("Failed to fetch hotels. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Hotel Finder</h1>
      <input
        type="text"
        value={cityCode}
        onChange={(e) => setCityCode(e.target.value)}
        placeholder="Enter city code (e.g., NYC for New York)"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {hotels?.map((val) => (
          <li key={val.hotelId}>{val.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
